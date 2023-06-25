export async function fetchJson(path, options?): Promise<any> {
    if (typeof window !== 'undefined') {
        return (window as any).fetch(path, options).then((r) => r.json());
    } else if (path.lastIndexOf('http', 0) !== 0) {
        try {
            return require('fs');
        } catch (e) {
            return null;
        }
    } else {
        return require('node-fetch')(path, options).then((r) => r.json());
    }
}