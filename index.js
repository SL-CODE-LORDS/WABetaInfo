const wabetainfo = require("./wabetainfo");
const fs = require('fs');

class WAB {
    constructor(last_url = '', file_name = 'id_save_file') {
        this.last_url = last_url
        this.file_name = file_name + '.txt'
        this.running_loop = false
    }
    async articlelist(filters) {
        return await wabetainfo.articlelist(filters);
    }
    async latest() {
        return await wabetainfo.latest();
    }
    async latest_url() {
        const article = await wabetainfo.latest();
        return article.url;
    }
    async searchurl(url) {
        return await wabetainfo.searchurl(url)
    }

    save_url(article_url) {
        this.last_url = article_url
        fs.writeFileSync(this.file_name, article_url)
    }

    read() {
        try {
            return fs.readFileSync(this.file_name, 'utf-8')
        } catch { }
        return ''
    }

    get_url() {
        this.last_url = this.last_url || this.read()
        return this.last_url
    }

    article_loop(callback, ms = 60 * 1000) {
        this.clear_loop()
        this.running_loop = setInterval(async () => {
            var article = await this.latest_url()
            var old = this.get_url()
            if (article.url != old) {
                this.save_url('' + article.url)
                var full_article = await this.searchurl(article.url)
                await callback(full_article)
            }
        }, ms)
    }

    clear_loop() {
        try {
            clearInterval(this.running_loop)
        } catch { }
    }
}

module.exports = WAB