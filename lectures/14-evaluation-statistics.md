# Lecture 14: Evaluation and Statistics

We've discussed problems this semester with defining terms and we have learned
that a lot of effort has been expended into standardizing them. We have also
seen that the topics that we've covered--technologies, standards, access,
usability, workflow, markets, licensing--are linked in some way. All of this
complexity makes the measurement of *usage* that much more complicated. The
problem is that whenever we interact with electronic resources (or basically
all activity on the web and internet), a computer server somewhere keeps a log
of that interaction. Having logs available makes it seem that we can have
accurate data about usage, but insight is always difficult to acquire no matter
how much data is available to us. 

However, it is often good data, it's simply that it's data with limitation.
This week we learn about the efforts that have gone into standardizing usage
metrics and usage reports via Project Counter. Also, we see a few examples of
how usage data can help inform collection development and benefit the library
in other ways. This is an important area of electronic resource librarianship,
but it's also an area that may overlap with other parts of librarianship. Here
we might see job titles like [library systems administrator][ls_admin]. 

## Project Counter

Project Counter is a Code of Practice that seeks to help provide more
informative and consistent reporting of electronic resource usage. From
[Project Counter][proj_counter]:

> Since its inception in 2002, COUNTER has been focused on providing a code of
> practice that helps ensure librarians have access to consistent, comparable,
> and credible usage reporting for their online scholarly information. COUNTER
> serves librarians, content providers, and others by facilitating the
> recording and exchange of online usage statistics. The COUNTER Code of
> Practice provides guidance on data elements to be measured and definitions of
> these data elements, as well as guidelines for output report content and
> formatting and requirements for data processing and auditing. To have their
> usage statistics and reports designated COUNTER compliant, content providers
> MUST provide usage statistics that conform to the current Code of Practice.

These reports were designed to help solve a problem that will likely never
completely be solved, but it's still an important and useful effort. The main
goal of Counter is to provide usage reports, and the reports, for version 5 of
Counter, cover four major areas. I should note that Project Counter refers to
these as *Master Reports*, but I'm revising this in preference for the term
*Major* because of efforts to replace words that have racist connotations in
various industries. You can read more about such efforts by searching the web
and in this [NPR interview][npr_interview]. The major reports of Project
Counter include:

  - Platforms
  - Databases
  - Titles
  - Items

And you can see which reports these four replace in [a table in Appendix B of
the Code of Practice][proj_counter_app_b].

[Counter 5][counter_v5] includes better reporting consistency, better clarity
of metrics that measure usage activity, better views of the data, and more. In
order to clarify the purpose of Counter, let's review the introduction to the
[Code of Practice][proj_counter], which articulates the purpose, scope,
application, and more of Counter.

[ Note: Review the Introduction to the Code of Practice ]

## Readings

[Pesch (2017)][pesch2017] provides a helpful introduction to the history of
Project Counter and the migration from Counter version 4 to version 5. Table
1 in Pesch describes the four major reports. Most of the reports are
self-explanatory. Database, Title, and Item reports cover what they describe,
but Platform reports might be less obvious. These reports include usage metrics
at the broadest level and of things like EBSCOhost databases, ProQuest
databases, SAGE resources, Web of Science databases, and so on. These reports
come into play when users/patrons search in the overall platform but not in any
single database provided by the platform. For example, UK Libraries subscribes
to the ProQuest Databases and for us, that includes [29 primary
databases][proq_db]. Users can search all at the same time or search any single
one. The same holds for platforms like EBSCOhost, Web of Science, and others.
This is thus at the platform level.

The [Scott (2016)][scott2016] article provides a nice use case for how Counter
reports can inform collection development. We've talked a bit about the *Big
Deal* packages that more libraries are trying to move away from because such
deals often include access to titles that are not used or not relevant to
a library community. Here Scott shows that it might be possible to avoid
subscribing to some services using this data, but it's also important to
closely read through and understand the problems associated with ILL, the
metrics, and other limitations described in the Conclusion section of this
article.

We move away from Project Counter with the [Stone and Ramsden
(2013)][stone2013] article. I wanted to introduce this article because it
highlights how metrics can be used to assess the value of a library, which is
often underestimated by administration but constantly required in order to
garner the resources needed to improve or sustain a library's resources. Here
Stone and Ramsden investigate the correlation (not causation) between library
usage and student retention, increasing the latter is the Holy Grail of college
and universities. If this were a public library report, it might be interesting
to see how well electronic library usage correlates to continued usage and how
such a correlation might result in various outcomes. One of the nice things
about the Stone and Ramsden article is that it does not depend on quantitative
metrics alone but supports its findings through qualitative research. There's
only so much a usage metric can say.

Finally, I'm a big fan of the [*code\{4\}lib* journal][code4lib] and this
article by [Zou][zou] is pretty cool. Although this article overlaps with some
security issues, a topic that we'll cover in our last week of the semester, the
article also provides a way of thinking outside the box about the metrics that
you'll have access to as an electronic resource librarian. Here, Zou describes
a process of taking EZproxy logs and turning them into something useful and
dynamic by incorporating some additional technologies. Recall that
[EZproxy][ezproxy] is software that authenticates users and provides access
given that authentication. We use EZproxy at UK whenever we login to access
a journal article and you'll notice the **ezproxy.uky.edu** string in any URL
for a journal that you've accessed via UK Libraries' installation of EZproxy
and the URL ``https://login.ezproxy.uky.edu/login`` when we log in. Zou
specifically references [the standard way][zou2] of analyzing these logs (take
a look at the page at that link), which can be insightful and helpful, but
Zou's method makes the analysis of these logs more visual and real-time. The
main weakness with Zou's method is that it seems to me to be highly dependent
on Zou doing the work since it's so customized. If Zou leaves their library,
then this customized analysis might not last. Still, it's good to know that if
you have an interest in developing skills with systems administration, with
various other technologies, and with some basic scripting language, this kind
of thing, and more, is possible.


[proj_counter]:https://www.projectcounter.org/code-of-practice-five-sections/introduction-to-counter-code-of-practice-release-5/
[counter_v5]:https://www.projectcounter.org/code-of-practice-five-sections/foreword/
[npr_interview]:https://www.npr.org/2020/07/09/889502179/is-it-enough-to-remove-words-with-racist-connotations-from-tech-language-hint-no
[proj_counter_app_b]:https://www.projectcounter.org/2448-2/
[pesch2017]:http://doi.org/10.1080/0361526X.2017.1391153
[proq_db]:https://libraries.uky.edu/record.php?lir_id=90
[scott2016]:https://doi.org/10.1080/0361526X.2016.1165783 
[stone2013]:https://doi.org/10.5860/crl12-406
[zou]:https://journal.code4lib.org/articles/10589
[zou2]:https://acrl.ala.org/techconnect/post/analyzing-ezproxy-logs/
[ls_admin]:https://www.google.com/search?&q=library+systems+administrator
[ezproxy]:https://www.oclc.org/en/ezproxy.html
[code4lib]:https://code4lib.org/
