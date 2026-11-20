import subprocess, re, json, sys, glob, os

KEYMAP = {'SEO': 'seo', 'AEO': 'aeo', 'GEO': 'geo', 'AIEO': 'aieo'}

def fix_tables(lines):
    out, buf = [], []
    def flush():
        if not buf: return
        rows = [[c.strip() for c in l.strip().strip('|').split('|')] for l in buf]
        rows = [r for r in rows if not all(re.fullmatch(r':?-*:?', c) for c in r)]   # drop separators
        rows = [r for r in rows if any(c for c in r)]                                  # drop empty header row
        if rows:
            head = [c.replace('**', '') for c in rows[0]]
            out.append('| ' + ' | '.join(head) + ' |')
            out.append('|' + '|'.join(['---'] * len(head)) + '|')
            for r in rows[1:]:
                out.append('| ' + ' | '.join(r) + ' |')
        buf.clear()
    for l in lines:
        if l.strip().startswith('|'): buf.append(l)
        else:
            flush(); out.append(l)
    flush()
    return out

def clean_section(text):
    lines = text.split('\n')
    lines = fix_tables(lines)
    out, first_bold = [], True
    for l in lines:
        s = l.strip()
        s = s.replace('\\', '')
        if s in ('>', ''):
            out.append(''); continue
        if s.startswith('> '):
            s = s[2:].strip()
        if s.startswith('• '):
            s = '- ' + s[2:]
        m = re.fullmatch(r'\*\*(.+?)\*\*', s)
        if m and not s.startswith('|'):
            title = m.group(1).strip()
            s = ('### ' if first_bold else '#### ') + title
            first_bold = False
        elif first_bold and s and not s.startswith('|'):
            pass
        out.append(s)
    txt = '\n'.join(out)
    txt = re.sub(r'\n{3,}', '\n\n', txt).strip()
    txt = re.sub(r'(?m)^(- .*)\n\n(?=- )', r'\1\n', txt)
    txt = re.sub(r'(?m)^(- .*)\n\n(?=- )', r'\1\n', txt)
    for a, b in [('2024補習班選擇完整指南', '補習班選擇完整指南'), ('2024政府補助完整攻略', '政府補助完整攻略'), ('2024 Government Grants Guide', 'Government Grants Guide')]:
        txt = txt.replace(a, b)
    return txt

def parse(path):
    md = subprocess.run(['pandoc', path, '-t', 'gfm', '--wrap=none'], capture_output=True, text=True).stdout
    lines = [l for l in md.split('\n')]
    head = [re.sub(r'\*\*', '', l).strip() for l in lines[:8] if l.strip()]
    zh_title, en_title = head[1], head[2]
    zi = md.index('中文版 CHINESE VERSION'); ei = md.index('英文版 ENGLISH VERSION')
    parts = {'zh': md[zi:ei], 'en': md[ei:]}
    content = {}
    for lang, body in parts.items():
        pat = r'\*\*【(SEO|AEO|GEO|AIEO)(?:版| Version)】\*\*'
        chunks = re.split(pat, body)
        for i in range(1, len(chunks), 2):
            key = KEYMAP[chunks[i]]
            content.setdefault(key, {})[lang] = clean_section(chunks[i + 1])
    zi_ind, zi_sub = re.split(r'[．.]', zh_title, maxsplit=1)
    en_ind, en_sub = [x.strip() for x in en_title.split('·', 1)]
    return {'industry': {'en': en_ind, 'zh': zi_ind.strip()}, 'subtitle': {'en': en_sub, 'zh': zi_sub.strip()}, 'content': content}

ids = {'12': '22-ai', '13': '23-preventive', '14': '24-tutoring', '15': '25-vegetarian', '16': '26-agriculture',
       '17': '27-bakery-startup', '18': '28-senior-care', '19': '29-medical-devices', '20': '30-grants', '21': '31-esg'}
items = []
for p in sorted(glob.glob(sys.argv[1] + '/*.docx')):
    n = os.path.basename(p)[:2]
    d = parse(p); d['id'] = ids[n]; d['image'] = ''
    for k in ('seo', 'aeo', 'geo', 'aieo'):
        assert k in d['content'] and 'zh' in d['content'][k] and 'en' in d['content'][k], (p, k)
    img = f"/images/{d['id']}.webp" if os.path.exists(f"public/images/{d['id']}.webp") else ''
    items.append({'id': d['id'], 'industry': d['industry'], 'subtitle': d['subtitle'], 'image': img, 'content': d['content']})
ts = "import type { PortfolioItem } from './portfolio-data';\n\n// 由 docs/*.docx 轉出（scripts/docx2case.py），第二批 10 個產業\nexport const extraPortfolioData: PortfolioItem[] = " + json.dumps(items, ensure_ascii=False, indent=2) + ";\n"
open(sys.argv[2], 'w').write(ts)
for it in items:
    print(it['id'], it['industry'], it['subtitle'])
    for k in ('seo','aeo','geo','aieo'): print('   ', k, it['content'][k]['zh'].split('\n')[0][:50], '|', it['content'][k]['en'].split('\n')[0][:50], len(it['content'][k]['zh']))
