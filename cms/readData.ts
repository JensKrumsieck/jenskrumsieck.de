import matter from 'gray-matter'
import yaml from 'js-yaml'
import fs from 'fs'

export default function readData<T>(label: 'publications' | 'posters' | 'projects', locale: 'en' | 'de' = null): T[] {
    const basePath = locale == null ? `content/${label}/` : `content/${label}/${locale}/`;
    const files = fs.readdirSync(basePath)
    let dataList = []
    files.forEach(file => {
        dataList.push(readFile(file, basePath))
    });
    return dataList;
}

function readFile(file: string, basePath: string) {
    var file = fs.readFileSync(basePath + file, 'utf-8')
    const { data, content } = matter(file, {
        engines: {
            yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA })
        }
    })
    return {
        ...data,
        content: content
    };
}
