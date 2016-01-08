
require('components/app/common/header/ctrl');
require('components/app/common/header/tpl');
require('components/app/common/left/ctrl');
require('components/app/common/left/tpl');
require('components/app/index/ctrl');
require('components/app/index/tpl');

module.exports = function (control) {
    var url = steel.router.get().url;
    var contentPath = steel.router.get().path.match(/^\/html\/(.*?)(\.html)?$/i)[1];
    contentPath = contentPath || 'index';
    control.set({
        data: {},
        tpl: './tpl',
        css: '../css/app.css',
        children: {
            content: 'components/app/' + contentPath + '/ctrl'
        }
    });
}