import matter from 'gray-matter'
import yaml from 'js-yaml'
import fs from 'fs'

export default function readData<T>(label: 'publications' | 'posters'): T[] {
    const files = fs.readdirSync('content/' + label)
    let dataList = []
    files.forEach(file => {
        var file = fs.readFileSync(`content/${label}/${file}`, 'utf-8')
        const { data, content } = matter(file, {
            engines: {
                yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA })
            }
        })
        dataList.push({
            ...data,
            content: content
        });
    });
    return dataList;
}
