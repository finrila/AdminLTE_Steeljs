/**
 * App 配置
 */

steel.config({
    ajaxPath: '/',
    mainBox: $('#main')[0],
    singlePage: true,
    router: [
        [/\/html\/.*/, 'components/app/main/ctrl']
    ]
});
require('plugins/jQueryUI/jquery-ui');
require('plugins/slimScroll/jquery.slimscroll'); 
require('plugins/AdminLTE/AdminLTE');
require('components/app/main/ctrl');
require('components/app/main/tpl');

steel.on('stageChange', function(node, renderFromStage) {
    if (steel.router.get().type === 'init') {
        $('#pageloader').show();
        $('#main').hide();
    }
});
steel.on('allRendered', function() {
    $('#pageloader').hide();
    $('#main').show();
    $.AdminLTE.init();
});

