// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="p0-intro-erm-libraries.html">Electronic Resource Management in Libraries</a></li><li class="chapter-item expanded "><a href="p1-er-librarians.html"><strong aria-hidden="true">1.</strong> Electronic Resource Librarians</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="01-the-erm-librarian.html"><strong aria-hidden="true">1.1.</strong> The ERM Librarian</a></li><li class="chapter-item expanded "><a href="02-desperately-seeking-erm-librarian.html"><strong aria-hidden="true">1.2.</strong> Desparately Seeking an ERM Librarian</a></li><li class="chapter-item expanded "><a href="03-constant-disruption.html"><strong aria-hidden="true">1.3.</strong> Constant Disruption</a></li></ol></li><li class="chapter-item expanded "><a href="p2-technologies-standards.html"><strong aria-hidden="true">2.</strong> Technologies and Standards</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="04-erm-ils.html"><strong aria-hidden="true">2.1.</strong> The ERM and the ILS</a></li><li class="chapter-item expanded "><a href="05-standardizing-erm.html"><strong aria-hidden="true">2.2.</strong> Standardizing ERM</a></li><li class="chapter-item expanded "><a href="06-interoperability.html"><strong aria-hidden="true">2.3.</strong> Interoperability</a></li><li class="chapter-item expanded "><a href="07-electronic-access.html"><strong aria-hidden="true">2.4.</strong> Electronic Access</a></li></ol></li><li class="chapter-item expanded "><a href="p3-e-resource-stewardship.html"><strong aria-hidden="true">3.</strong> E-resource Stewardship</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="08-workflow.html"><strong aria-hidden="true">3.1.</strong> The ERM Workflow</a></li><li class="chapter-item expanded "><a href="09-markets-economics.html"><strong aria-hidden="true">3.2.</strong> Markets and Economics of Electronic Resources</a></li><li class="chapter-item expanded "><a href="10-licensing-basics.html"><strong aria-hidden="true">3.3.</strong> Licensing Basics</a></li><li class="chapter-item expanded "><a href="11-licensing-and-negotiating.html"><strong aria-hidden="true">3.4.</strong> Licensing and Negotiating</a></li><li class="chapter-item expanded "><a href="12-acquisitions-collection-development.html"><strong aria-hidden="true">3.5.</strong> Acquisitions and Collection and Development</a></li></ol></li><li class="chapter-item expanded "><a href="p4-patrons.html"><strong aria-hidden="true">4.</strong> Patrons</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="13-user-experience.html"><strong aria-hidden="true">4.1.</strong> User Experience</a></li><li class="chapter-item expanded "><a href="14-evaluation-statistics.html"><strong aria-hidden="true">4.2.</strong> Evaluation and Measurement</a></li><li class="chapter-item expanded "><a href="15-security-privacy.html"><strong aria-hidden="true">4.3.</strong> Security and Privacy</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
