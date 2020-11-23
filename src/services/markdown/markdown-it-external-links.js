function isLocalHref(href) {
    var regExp = new RegExp("//" + location.host + "($|/)");
    return (href.substring(0, 4) === "http") ? regExp.test(href) : true;
}

function setLinkClasses(token, className) {
    token.attrs.forEach(function (attr) {
        if (attr[0] === 'href' && !isLocalHref(attr[1])) {
            token.attrSet('class', className);
            token.attrSet('target', '_blank');
            token.attrSet('rel', 'noopener');
        }
    })
}

module.exports = function (md, opts) {
    md.core.ruler.after(
        'inline',
        'external-links',
        function (state) {
            var className;
            if (typeof opts.className == 'string') {
                className = opts.className
            } else {
                return false
            }

            if (typeof className === 'string') {
                state.tokens.forEach(function (blockToken) {
                    if (blockToken.type === 'inline' && blockToken.children) {
                        blockToken.children.forEach(function (token) {
                            var type = token.type
                            if (type === 'link_open') {
                                setLinkClasses(token, className)
                            }
                        })
                    }
                })
            }
            return false
        }
    )
}