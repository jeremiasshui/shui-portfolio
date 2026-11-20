import React from 'react';

/** 行內粗體：**text** → <strong> */
function inline(text: string, key: string): React.ReactNode[] {
    return text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g).filter(Boolean).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**'))
            return <strong key={`${key}-${i}`} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
        if (part.length > 2 && part.startsWith('*') && part.endsWith('*'))
            return <em key={`${key}-${i}`} className="text-gray-600">{part.slice(1, -1)}</em>;
        return <React.Fragment key={`${key}-${i}`}>{part}</React.Fragment>;
    });
}

function splitRow(line: string) {
    return line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
}

export default function Markdown({ text, accent }: { text: string; accent: string }) {
    const lines = text.replace(/\r\n?/g, '\n').split('\n');
    const out: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const t = lines[i].trim();
        const k = `l${i}`;

        if (t === '') { i++; continue; }

        if (t.startsWith('### ')) {
            out.push(<h3 key={k} className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-4 leading-snug">{inline(t.slice(4), k)}</h3>);
            i++; continue;
        }
        if (t.startsWith('#### ')) {
            out.push(<h4 key={k} className="text-lg font-semibold text-gray-900 mt-7 mb-2" style={{ color: accent }}>{inline(t.slice(5), k)}</h4>);
            i++; continue;
        }

        if (t.startsWith('|') && t.endsWith('|')) {
            const rows: string[][] = [];
            let hasHeader = false;
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                const cells = splitRow(lines[i]);
                if (cells.every((c) => /^:?-+:?$/.test(c))) hasHeader = true;
                else rows.push(cells);
                i++;
            }
            const head = hasHeader ? rows[0] : null;
            const body = hasHeader ? rows.slice(1) : rows;
            out.push(
                <div key={k} className="my-5 overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                        {head && (
                            <thead className="bg-gray-50">
                                <tr>{head.map((c, j) => <th key={j} scope="col" className="px-3 py-2.5 text-left font-semibold text-gray-900 border-b border-gray-200">{inline(c, `${k}h${j}`)}</th>)}</tr>
                            </thead>
                        )}
                        <tbody>
                            {body.map((r, ri) => (
                                <tr key={ri} className="border-b border-gray-100 last:border-0">
                                    {r.map((c, j) => <td key={j} className="px-3 py-2.5 text-gray-700 align-top">{inline(c, `${k}r${ri}c${j}`)}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }

        if (t.startsWith('> ')) {
            out.push(<blockquote key={k} className="border-l-4 pl-4 py-2 my-5 text-gray-600 bg-gray-50 rounded-r" style={{ borderColor: accent }}>{inline(t.slice(2), k)}</blockquote>);
            i++; continue;
        }

        if (/^(- |\d+\. )/.test(t)) {
            const ordered = /^\d+\. /.test(t);
            const items: string[] = [];
            while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i].trim()) : lines[i].trim().startsWith('- '))) {
                items.push(lines[i].trim().replace(/^(- |\d+\. )/, ''));
                i++;
            }
            const List = ordered ? 'ol' : 'ul';
            out.push(
                <List key={k} className={`${ordered ? 'list-decimal' : 'list-disc'} pl-5 my-3 space-y-1.5 text-gray-700 leading-relaxed`}>
                    {items.map((it, j) => <li key={j}>{inline(it, `${k}i${j}`)}</li>)}
                </List>
            );
            continue;
        }

        out.push(<p key={k} className="text-gray-700 leading-relaxed sm:leading-8 my-3">{inline(t, k)}</p>);
        i++;
    }

    return <div className="text-[15px] sm:text-base">{out}</div>;
}
