const fs = require('fs');
const path = require('path');

module.exports = {

    filters: {
        "hello" : function(name) {
            return 'Hello '+name;
        }
    },
    blocks: {
        hint: {
            process: function (block) {
                // Available styles: info, danger, tip, working
                var style = block.kwargs.style || 'info';
                var pluginConfig = this.config.get('pluginsConfig.hints');

                return this
                    .renderBlock('markdown', block.body)
                    .then(function(renderedBody) {
                        return '<div class="alert alert-'+ALERT_STYLES[style]+' hints-alert">'
                            + makeIcon(style, pluginConfig)
                            + wrapInContainer(renderedBody)
                            + '</div>';
                    });
            }
        }
    }
};