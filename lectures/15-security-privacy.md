## Lecture 15: Privacy and Security

Breeding starts off with [Chapter 1][breeding1] from [this week's reading][breeding2] of [Library Technology Reports][ltr] with the following statement:

> Libraries have a long tradition of taking extraordinary measures to ensure the privacy of those who use their facilities and access their materials.

This is mostly true but not entirely so. When I was an undergraduate, I remember going to the library to look for books on a sensitive topic. I saw a book on the shelves that looked relevant, and when I pulled it off the shelf and opened it, I noticed that a friend of mine had checked the book out before me because their name was written on the due date card in their handwriting. Even though I had grown up with these due date cards in library books, it had never occurred to me before then how these cards could pose a problem with privacy. At the time, I decided not to check out that book because of that issue.

We might be comforted in thinking that the kind of information that was supposedly revealed to me in the book that my friend had checked out, and that I had opened, is the kind of information that would not scale up easily. It was a serendipitous event that involved me looking for a book on the same topic and then just happening to pick the one book that my friend had used. It's not likely, then, that this might pose a big problem at scale.

However, let's think of that information in that due date card as metadata, and then ask, how could we use it? The sociologist Kieren Healy did that kind of thing with membership lists from colonial times. He showed that using limited data like the one I found in that book, some important things could be discovered. For example, [Healy][healy1] imagined that if the British had access to simple social network analysis tools back in 1772, they could have identified that Paul Revere was a patriot and then have used that information to prevent or interfere with the American Revolution. I encourage you to read his blog entry and his [follow-up reflection][healy2] because it is a neat *what-if* hypothetical case study.

Most libraries in North America have replaced due date slips with bar codes, and while this has removed the problem above, the overall migration from paper-based workflows to electronic ones have raised other problems. Not long after the Patriot Act was passed after 9/11, FBI agents ordered a Connecticut librarian to ["identify patrons who had used library computers online at a specific time one year earlier"][connfour]. Per the law, the librarians involved were placed under a gag order, which prevented them from speaking out. This led to a lawsuit against the then US Attorney General. Eventually the librarians were released from their gag order and allowed to discuss the event.

There are occasionally big, dramatic cases like the one described above, but privacy and security issues are often much more mundane but still quite important. Since many users of libraries of all types visit library homepages, then encrypting all the web/internet traffic is important. A year and a half ago, the [major web browsers announced][tlsbrowsers] that they would no longer support Transport Layer Security (TLS) protocol versions 1.1 or earlier, and that any site that had not yet migrated to TLS version 1.2 or above will not be accessible. TLS is used to encrypt web traffic. This news came out in early March 2020, and the browsers postponed blocking these sites because of the pandemic. But the migration went into affect a few months later, and as you can see in the screenshot below, for a while I had to enable an insecure connection to libraries.uky.edu in Firefox if I wanted to visit it. When I enabled it, then my activity on libraries.uky.edu was potentially visible to others under certain conditions. Note, however, that once I sign into my library account, I'm transferred to Primo's cloud service, and then to UK's OAuth page to log in. These parts of the encryption chain are fairly strong. So it's only activity specifically on libraries.uky.edu that was not good at the time.

![UK Libraries TLS Version Block in Firefox](uklibrariesTLSversion.png)

In Chapter 1 of this week's reading, Breeding does a nice job introducing a variety of technologies and policies that are related to security and privacy. There are important technological things to consider, like web traffic encryption. There are also important policy considerations, too, like how third party vendors implement privacy and security mechanisms (like the Primo example above). Note that the [SERU][serurp] recommended practice has a section dedicated to Confidentiality and Privacy. In case you work at a library that does not use SERU, this is how SERU can be useful to you. It can inform us of the kinds of provisions that a library ought to have in a license if the default provisions a vendor proposes do not include the necessary components.

In Chapter 2, Breeding reports on the state of privacy and security protections among a selection of ERM vendors. I should note that although this article is only four years old, this area moves fast and it's likely that the problems that Breeding identifies with some implementations have been fixed in recent years. As I noted, since browsers like Chrome, Firefox, Edge, and Safari have grown stricter about enforcing encryption, web services have complied by adhering to better security standards. Chapter 3 covers the same issue from the library's perspectives. Here is where improvements are much less likely to be seen. For example, a number of library sites use Google Analytics to track site usage and other metrics, but this means that our actions, albeit somewhat anonymized, on these library sites are being collected and stored by Google (or some other analytic service). Also, many websites, library websites included, use fonts that are hosted on other servers, but doing so means that these can be tracked, too (see my the access log entry above as a basic example). There's a trade-off, though. If we want to learn more about how users interact with the site in order to improve usability and accessibility, then we have to have some of this data. Here's where a privacy policy might come into play.

Thus, I point to a [controversial article][controarticle] that was published on the *code4lib* journal last year. I'd highly encourage you to peruse the article as well as [the comments at the bottom of the page][articlecomments]:

(Demo library connection in Firefox web developer settings)

Please read the articles closely, and let's have an open discussion.

[breeding1]:https://journals.ala.org/index.php/ltr/article/view/5973/7606
[breeding2]:https://journals.ala.org/index.php/ltr/issue/view/549
[ltr]:https://journals.ala.org/
[healy1]:https://kieranhealy.org/blog/archives/2013/06/09/using-metadata-to-find-paul-revere/
[healy2]:https://kieranhealy.org/blog/archives/2013/06/11/following-up-on-paul-revere/
[connfour]:https://www.courant.com/opinion/op-ed/hc-op-librarians-stand-up-to-patriot-act-again-20160927-story.html
[tlsbrowsers]:https://www.zdnet.com/article/browsers-to-block-access-to-https-sites-using-tls-1-0-and-1-1-starting-this-month/
[serurp]:https://www.niso.org/publications/rp-7-2012-seru
[controarticle]:https://journal.code4lib.org/articles/15340
[articlecomments]:https://journal.code4lib.org/articles/15340#comment-2744977
