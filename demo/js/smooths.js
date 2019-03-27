(function () {
  this.smooths = function () {
    let defaults = {
      section: 'section',
      anchor: 'link',
      speed: 200,
      easing: 10 // Create options by extending defaults with the passed in arugments

    };

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    } // add active class to anchor


    let s = document.getElementsByClassName(this.options.section);
    let navigation = document.getElementsByClassName(this.options.anchor);
    let section = [];

    for (let i of s) {
      section.push(i.offsetTop);
    }

    window.addEventListener('scroll', function (e) {
      let scroll = Math.round(window.scrollY);
      let a = 0;

      for (let i of section) {
        if (scroll >= i) {
          removeLinkColorClass();
          navigation[a].classList.add('link--active');
          a++;
        }

        if (scroll < section[0]) {
          removeLinkColorClass();
        }
      }
    }, false);

    let removeLinkColorClass = () => {
      for (let i = 0; i < navigation.length; i++) {
        navigation[i].classList.remove('link--active');
      }
    }; // smooth snaps to sections


    const speed = this.options.speed;
    const easing = this.options.easing;
    let href;

    for (let i = 0; i < navigation.length; i++) {
      href = navigation[i].attributes.href === undefined ? null : navigation[i].attributes.href.nodeValue.toString();

      if (href !== null && href.length > 1 && href.substr(0, 1) == "#") {
        navigation[i].onclick = function () {
          let element;
          let href = this.attributes.href.nodeValue.toString();

          if (element = document.getElementById(href.substr(1))) {
            let hop_count = speed / easing;
            let getScrollTopDocumentAtBegin = getScrollTopDocument();
            let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

            for (let i = 1; i <= hop_count; i++) {
              (function () {
                let hop_top_position = gap * i;
                setTimeout(function () {
                  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                }, easing * i);
              })();
            }
          }

          return false;
        };
      }
    }

    let getScrollTopElement = function (e) {
      let top = 0;

      while (e.offsetParent != undefined && e.offsetParent != null) {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
      }

      return top;
    };

    let getScrollTopDocument = function () {
      return document.documentElement.scrollTop + document.body.scrollTop;
    };
  }; // Utility method to extend defaults with user options


  function extendDefaults(source, properties) {
    var property;

    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }

    return source;
  }
})();