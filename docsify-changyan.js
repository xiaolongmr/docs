     // 自制脚本
      // 头像圆角
      document.addEventListener("DOMContentLoaded", function () {
        var elements = document.querySelectorAll(
          "#SOHUCS #SOHU_MAIN .module-cmt-list .block-cont-gw .cont-head-gw .head-img-gw .img-corner, #SOHUCS #SOHU_MAIN .module-cmt-header .section-cbox-w .block-head-w .head-img-ie-mask"
        );

        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = "block!important";
        }
      });

      (() => {
        "use strict";
        (window.$docsify = window.$docsify || {}),
          (window.$docsify.plugins = (window.$docsify.plugins || []).concat(
            function (o, f) {
              f.config.changyan;
              let e =
                  f.config.changyan && f.config.changyan.sid
                    ? `sid="${f.config.changyan.sid}"`
                    : "",
                t =
                  f.config.changyan && f.config.changyan.loading
                    ? f.config.changyan.loading
                    : '<span>Power by <a href="http://changyan.kuaizhan.com/" target="_blank" rel="noreferrer" rel="noopener">畅言云评</a>.</span>',
                c =
                  f.config.changyan && f.config.changyan.style
                    ? `style="${f.config.changyan.style}"`
                    : "",
                d =
                  f.config.changyan && f.config.changyan.id
                    ? `id="${f.config.changyan.id}"`
                    : "",
                n =
                  f.config.changyan && f.config.changyan.class
                    ? `class="${f.config.changyan.class}"`
                    : "";
              var i = `${
                f.config.changyan && f.config.changyan.pre
                  ? `${f.config.changyan.pre}`
                  : ""
              }<div ${c} ${d} ${n} ${e}> ${t}</div>`;
              o.afterEach(function (o) {
                return o + i;
              });
            }
          ));
      })();

      // 自制脚本