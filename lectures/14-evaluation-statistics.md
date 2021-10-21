## Lecture 14: Evaluation and Statistics

We've discussed problems this semester with defining terms, and we have learned that a lot of effort has been expended into standardizing them. We have also seen that the topics that we've covered---technologies, standards, access, usability, workflow, markets, licensing---are linked in some way. All this complexity makes the measurement of *usage* that much more complicated. The problem is that when electronic resources (or basically all activity on the web and internet) are accessed, a computer server somewhere keeps a log of that interaction. Having logs available makes it seem that we can have accurate data about usage, but it's not a guarantee, and the insight we may be able to glean is always difficult to acquire no matter how much data is available to us.

Example web server access log entry (I've obfuscated the IP address and the website domain):

```
99.999.99.99 - - [21/Oct/2021:10:54:35 -0400] "GET /favicon.ico HTTP/1.1" 404 517 "https://WEBSITE.edu/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0"
```

Access log type data can be good data to explore, but we have to be mindful that all data has limitations, and that there are different ways to define what usage means. For example, the log snippet above indicates that I visited that link at that server, but does that mean that I really **used** that website even though I accessed it? Even if we can claim that I did, what kind of use was it? Can we tell? (We can actually learn quite a lot from web server access logs.)

This week we learn about the efforts that have gone into standardizing usage metrics and usage reports via Project Counter. Also, we see a few examples of how usage data can help inform collection development and benefit the library in other ways. This is an important area of electronic resource librarianship, but it's also an area that may overlap with other parts of librarianship, such as systems librarianship or collection development. Here we might see job titles like [library systems administrator][ls_admin].

## Project Counter

Project Counter is a Code of Practice that seeks to help provide more informative and consistent reporting of electronic resource usage. From [Project Counter][proj_counter]:

> Since its inception in 2002, COUNTER has been focused on providing a code of practice that helps ensure librarians have access to consistent, comparable, and credible usage reporting for their online scholarly information. COUNTER serves librarians, content providers, and others by facilitating the recording and exchange of online usage statistics. The COUNTER Code of Practice provides guidance on data elements to be measured and definitions of these data elements, as well as guidelines for output report content and formatting and requirements for data processing and auditing. To have their usage statistics and reports designated COUNTER compliant, content providers MUST provide usage statistics that conform to the current Code of Practice.

Thus, these reports were designed to help solve a problem that will likely never completely be solved, but it's still an important and useful effort. The main goal of Counter is to provide usage reports, and the reports, for version 5 of Counter, cover four major areas:

* Platforms
* Databases
* Titles
* Items

And you can see which reports these four replace in [a table in Appendix B of the Code of Practice][proj_counter_app_b].

[Counter 5][counter_v5] was designed to include better reporting consistency, better clarity of metrics that measure usage activity, better views of the data, and more. In order to clarify the purpose of Counter, let's review the introduction to the [Code of Practice][proj_counter], which articulates the purpose, scope, application, and more of Counter.

[ Note: Review the Introduction to the Code of Practice ]

## Readings

[Pesch (2017)][pesch2017] provides a helpful introduction to the history of Project Counter and the migration from Counter version 4 to version 5. Table 1 in Pesch describes the four major reports. Most of the reports are self-explanatory. Database, Title, and Item reports cover what they describe, but Platform reports might be less obvious. These reports include usage metrics at the broadest level and of things like EBSCOhost databases, ProQuest databases, SAGE resources, Web of Science databases, and so on. These reports come into play when users/patrons search in the overall platform but not in any single database provided by the platform. For example, UK Libraries subscribes to the ProQuest Databases and for us, that includes [99 primary databases][proq_db]. Users can search many at the same time or search any single one. The same holds for platforms like EBSCOhost, Web of Science, and others. This is the platform level.

The [Scott (2016)][scott2016] article provides a nice use case for how Counter reports can inform collection development. We've talked a bit about the *Big Deal* packages that more libraries are trying to move away from because such deals often include access to titles that are not used or not relevant to a library community. Here Scott shows that it might be possible to avoid subscribing to some services using this data, but it's also important to closely read through and understand the problems associated with interlibrary loan, the metrics, and other limitations described in the Conclusion section of this article.

We move away from Project Counter with the [Stone and Ramsden (2013)][stone2013] article. I wanted to introduce this article because it highlights how metrics can be used to assess the value of a library, which is often underestimated by administration but constantly required in order to garner the resources needed to improve or sustain a library's resources. Here Stone and Ramsden investigate the correlation (not causation) between library usage and student retention. Increasing the latter is the Holy Grail of college and universities. If this were a public library report, it might be interesting to see how well electronic library usage correlates to continued usage and how such a correlation might result in various outcomes defined by the library. One nice thing about the Stone and Ramsden article is that it does not depend on quantitative metrics alone but supports its findings through qualitative research. There's only so much a usage metric can say.

Finally, I would like you to be aware of the [*code\{4\}lib* journal][code4lib] and this article by [Zou][zou] is pretty cool. Although this article overlaps with some security issues, a topic that we'll cover in our last week of the semester, the article also provides a way of thinking outside the box about the metrics that you'll have access to as an electronic resource librarian. Here, Zou describes a process of taking EZproxy logs (compare the example entry with the web server entry I included above) and turning them into something useful and dynamic by incorporating some additional technologies. Recall that [EZproxy][ezproxy] is software that authenticates users and provides access given that authentication. We use EZproxy at UK whenever we access a paywalled journal article. That is, you've noticed the **ezproxy.uky.edu** string in any URL for a journal that you've accessed via UK Libraries' installation of EZproxy, and the URL ``https://login.ezproxy.uky.edu/login`` is the log in URL. Zou specifically references [the standard way][zou2] of analyzing these logs (take a look at the page at that link), which can be insightful and helpful, but Zou's method makes the analysis of these logs more visual and real-time. The main weakness with Zou's method is that it seems to me to be highly dependent on Zou doing the work. If Zou leaves their library, then this customized analysis might not last. Still, it's good to know that if you have an interest in developing skills with systems administration, with various other technologies, and with some basic scripting language, this kind of thing, and more, is possible.

[proj_counter]:https://www.projectcounter.org/code-of-practice-five-sections/introduction-to-counter-code-of-practice-release-5/
[counter_v5]:https://www.projectcounter.org/code-of-practice-five-sections/foreword/
[npr_interview]:https://www.npr.org/2020/07/09/889502179/is-it-enough-to-remove-words-with-racist-connotations-from-tech-language-hint-no
[proj_counter_app_b]:https://www.projectcounter.org/2448-2/
[pesch2017]:http://doi.org/10.1080/0361526X.2017.1391153
[proq_db]:https://libguides.uky.edu/90
[scott2016]:https://doi.org/10.1080/0361526X.2016.1165783
[stone2013]:https://doi.org/10.5860/crl12-406
[zou]:https://journal.code4lib.org/articles/10589
[zou2]:https://acrl.ala.org/techconnect/post/analyzing-ezproxy-logs/
[ls_admin]:https://www.google.com/search?&q=library+systems+administrator
[ezproxy]:https://www.oclc.org/en/ezproxy.html
[code4lib]:https://code4lib.org/
