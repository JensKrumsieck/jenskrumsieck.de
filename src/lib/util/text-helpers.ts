export function truncateText(str: string, n: number): string {
    if (str.length < n) return str;

    const sub = str.substring(0, n - 1);
    return sub.substring(0, sub.lastIndexOf(" ")) + "&hellip;";
}

export function stripTags(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, "");
}

export function getExcerpt(str: string, n: number): string {
    str = str.replace(/<br\s*\/?>/gi, "\n")
    let tagFree = stripTags(str)
    tagFree = tagFree.replace(/(?:\r\n|\r|\n)/g, '<br />');
    tagFree = tagFree.replace(/(<br \/>*)+/g, "<br/>");
    return truncateText(tagFree, n);
}

export function getDesc(str: string, n: number): string {
    let tagFree = stripTags(str)
    if (tagFree.length < n) return tagFree;

    const sub = tagFree.substring(0, n - 1);
    return sub.substring(0, sub.lastIndexOf(" "))
}
/** host of the first external src (iframe, img, script...) in an html snippet, if any */
export function externalHost(html: string): string | null {
    const match = html.match(/\ssrc\s*=\s*["']?(?:https?:)?\/\/([^/"'\s?#]+)/i)
    return match ? match[1].replace(/^www\./, "") : null
}
