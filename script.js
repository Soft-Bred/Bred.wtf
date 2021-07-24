window.intercomSettings = {
    app_id: "efp5cdu4"
};
    
    
(function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
    } else {
        var d = document;
        var i = function () {
            i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
            i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/efp5cdu4';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }
})();

        const PATH = 'producthunt';
        const url = new URL(window.location.href);
        const params =  new URLSearchParams(url.search);
        const phBanner = document.querySelector('.ph_notification');

        if (params.get('ref') === PATH) {
            phBanner.style = 'display: flex';
        }
        
	Paddle.Setup({ vendor: 38650 });

    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-122971269-1');
    
        ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '257310718238849');
    fbq('track', 'PageView');
    
    window['_fs_debug'] = false;
    window['_fs_host'] = 'fullstory.com';
    window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
    window['_fs_org'] = 'QKWTV';
    window['_fs_namespace'] = 'FS';
    (function(m, n, e, t, l, o, g, y) {
        if (e in m) {
            if (m.console && m.console.log) {
                m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');
            }
            return;
        }
        g = m[e] = function(a, b, s) {
            g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
        };
        g.q = [];
        o = n.createElement(t);
        o.async = 1;
        o.crossOrigin = 'anonymous';
        o.src = 'https://' + _fs_script;
        y = n.getElementsByTagName(t)[0];
        y.parentNode.insertBefore(o, y);
        g.identify = function(i, v, s) {
            g(l, {
                uid: i
            }, s);
            if (v) g(l, v, s)
        };
        g.setUserVars = function(v, s) {
            g(l, v, s)
        };
        g.event = function(i, v, s) {
            g('event', {
                n: i,
                p: v
            }, s)
        };
        g.anonymize = function() {
            g.identify(!!0)
        };
        g.shutdown = function() {
            g("rec", !1)
        };
        g.restart = function() {
            g("rec", !0)
        };
        g.log = function(a, b) {
            g("log", [a, b])
        };
        g.consent = function(a) {
            g("consent", !arguments.length || a)
        };
        g.identifyAccount = function(i, v) {
            o = 'account';
            v = v || {};
            v.acctId = i;
            g(o, v)
        };
        g.clearUserCookie = function() {};
        g._w = {};
        y = 'XMLHttpRequest';
        g._w[y] = m[y];
        y = 'fetch';
        g._w[y] = m[y];
        if (m[y]) m[y] = function() {
            return g._w[y].apply(this, arguments)
        };
        g._v = "1.2.0";
    })(window, document, window['_fs_namespace'], 'script', 'user');
    
