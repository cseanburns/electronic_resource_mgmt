# Evaluation and Statistics

By the end of this section, you will understand that:

- Measuring electronic resource usage involves complexities due to the varied ways users interact with content.
- Web server logs can provide valuable data on usage, but they come with significant limitations and do not always capture the user's intent.
- Project COUNTER is a key initiative in standardizing how electronic resource usage is defined, measured, collected, and shared.
- COUNTER provides four major reports (Platform, Database, Title, Item), each offering insights at different levels of electronic resource usage, which are crucial for informed decision-making.
- Usage metrics not only help in assessing the value of electronic resources but also contribute to collection development and budget justification.
- The effective use of metrics often involves both quantitative and qualitative approaches to provide a fuller picture of library impact.
- Creativity and technical skills can enhance the analysis of usage data, such as transforming access logs into dynamic visual tools.
- Usage data is vital for libraries to demonstrate their value to stakeholders, but interpreting this data requires careful consideration of its context and limitations.

## Introduction

We've discussed problems with defining terms, and we have learned that much effort has been expended into standardizing them.
We have also seen that the topics that we've covered&mdash;technologies, standards, access, usability,
workflow, markets, licensing&mdash;are linked in some way.
All this complexity makes the *usage* measurement complicated.
The complication arises when electronic resources (or basically all activity on the web and internet) are accessed from client machines,
and a computer server records the client's access in a log file.
Logs like these make it seem that we can have accurate data about usage, but it's not a guarantee.
The insights we may glean are always difficult to acquire no matter how much data is available to us.

> ```
> 999.999.999.999 - - [18/Nov/2022:04:40:38 +0000] "GET /index.html HTTP/1.1" 200 494 "-" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0"
> ```
>
> Example web server access log entry, with obfuscated IP address. Simply by visiting a site, the web server is able to log
> the client's IP address, the time stamp, the page the client requested, the client's operating system type and version,
> and the client's web browser type and version.

Access log data like above can be good data, but we have to be mindful that all data has limitations,
and that there are different ways to define what usage means.
For example, the log snippet above indicates that I visited a page named *index.html* on that server, but
does that mean that I really **used** that website even though I accessed it?
Even if we can claim that I did, what kind of use was it?
Can we tell from that log entry?
In short, log data like this can't really capture the user's *intent*.

> Note that we can learn quite a lot from web server access logs, and there is software, like Google Analytics,
> that would be able to collect additional usage data.

As with other things we have discussed, there have been efforts to standardize electronic resource usage.
It's an important process because usage data informs collection development and benefits the library in other ways.
Discussions about usage do belong to the domain of electronic resource librarianship,
but it also overlaps with other areas of librarianship, such as systems librarianship or collection development.
Here we might see job titles like [library systems administrator][lsadmin].

## Project Counter

Project Counter is the primary attempt to standardize how usage is defined, measured, collected, and shared.
It is a Code of Practice that provides informative and consistent reporting of electronic resource usage.
From [Project Counter][projcounter]:

> Since its inception in 2002, COUNTER has been focused on providing a code of practice that helps ensure librarians
> have access to consistent, comparable, and credible usage reporting for their online scholarly information.
> COUNTER serves librarians, content providers, and others by facilitating the recording and exchange of online usage statistics.
> The COUNTER Code of Practice provides guidance on data elements to be measured and definitions of these data elements,
> as well as guidelines for output report content and formatting and requirements for data processing and auditing.
> To have their usage statistics and reports designated COUNTER compliant, content providers MUST provide usage statistics that conform to
> the current Code of Practice.

This code of practice was designed to solve a problem that will likely never completely be solved, but it's still an important and useful effort.

The main goal of Project Counter is to provide usage reports.
The reports, for release 5 of Counter, cover four major areas:

* Platforms
* Databases
* Titles
* Items

[Pesch (2017)][pesch2017] provides a helpful introduction to the history of Project Counter and the migration from Counter version 4 to version 5.
Table 1 in the Pesch article describes the four major reports (listed above).
These reports include usage metrics at the broadest level and of things like EBSCOhost databases, ProQuest databases,
SAGE resources, Web of Science databases, and so on.
These reports come into play when users/patrons search in the overall platform but not in any single database provided by the platform.
For example, UK Libraries subscribes to the ProQuest Databases and for us that includes [35 primary databases][proqdb].
Users can search many at the same time or search any single one.
The same holds for platforms like EBSCOhost, Web of Science, and others.
These report levels continue to form the framework for release 5.1,
which continues to build on the goals of its predecessors by providing standardized, comprehensive, and easy-to-use reports.

The four major reports each serve different but complementary purposes in understanding electronic resource usage.
As mentioned above, the Platform Report provides a birds-eye overview of usage across multiple resources.
This is essential for understanding the overall value provided by platforms like EBSCOhost or ProQuest.
The Database Report yields insights into individual database usage, such as
the [Library, Information Science and Technology Abstracts (LISTA)][lista] database,
which is part of the EBSCOhost collection.
This helps electronic resource librarians assess the relevance and impact of specific collections.
The Title and Item Reports offer granular data.
These reports detail the usage of specific journals, articles, or chapters.
Such reports support detailed collection analysis and decision-making for renewals or cancellations.

The transition from COUNTER 5 to 5.1 introduces improvements to the clarity and consistency of these metrics.
Per the COUNTER website, it addresses ambiguities that might have led to misinterpretations in previous versions.
By emphasizing transparency and accuracy, COUNTER 5.1 aims to make usage statistics more actionable for libraries and content providers.
This provides justification of resource investment and can help improve the user experience.

[Scott (2016)][scott2016] illustrates a nice use case for how Counter reports can inform collection development.
We've addressed the *Big Deal* packages that more libraries are trying to move away from because such deals often include access to titles
that are not used or not relevant to a library community.
Here Scott shows that it might be possible to avoid subscribing to some services using this data,
but it's also important to closely read through and understand the problems associated with interlibrary loan, the metrics,
and other limitations described in the Conclusion section of this article.

## The Value of Metrics

We move away from Project Counter with the [Stone and Ramsden (2013)][stone2013] article.
I introduce this article because it highlights how metrics can be used to assess the value of a library,
which is often underestimated by administration
but constantly required in order to garner the resources needed to improve or sustain a library's resources.
Here Stone and Ramsden investigate the correlation (not causation) between library usage and student retention.
Increasing the latter is the Holy Grail of college and universities.
The more students who attend college or university and finish, the more successful the college or university's mission is.
However, many universities struggle with keeping students and often lose nearly [25% of their students][us_retention] each year.
If this were a public library report, it might be interesting to see how well electronic library usage correlates
to continued usage and how such a correlation might result in various outcomes defined by the library.
One nice thing about the Stone and Ramsden article is that it does not depend on quantitative metrics alone but supports
its findings through qualitative research.
There's only so much a usage metric can say.

## Using Metrics

I would like you to be aware of the [*code\{4\}lib* journal][code4lib] and this article by [Zou][zou2015] is pretty cool.
Although this article overlaps with some security issues, a topic that we'll cover in the final section,
the article also provides a way of thinking outside the box about the metrics that you have access to as an electronic resource librarian.
Here, Zou describes a process of taking EZproxy logs (compare the example entry with the web server entry I included above)
and turning them into something useful and dynamic by incorporating additional technologies.
Recall that [EZproxy][ezproxyex] is software that authenticates users and provides access given that authentication.
We use EZproxy at UK whenever we access a paywalled journal article.
That is, you've noticed the **ezproxy.uky.edu** string in any URL for a journal that you've accessed via
UK Libraries' installation of EZproxy, and the URL ``https://login.ezproxy.uky.edu/login`` is the log in URL.
Zou specifically references [the standard way][zou2] of analyzing these logs (take a look at the page at that link),
which can be insightful and helpful, but Zou's method makes the analysis of these logs more visual and real-time.
The main weakness with Zou's method is that it seems to me to be highly dependent on Zou doing the work.
If Zou leaves their library, then this customized analysis might not last.
Still, it's good to know that if you have an interest in developing skills with systems administration,
with various other technologies, and with some basic scripting language, this kind of thing, and more, is possible.

## Getting Creative

[Smith & Arneson (2017)][smith2017] detail very creative and fun ways to collect usage data about resource usage when vendors do not provide usage data.
In the first part of this article, Smith describes how they analyzed their link resolver reports
to infer what users were accessing in their collections.
Arneson's section describes using a Linux file search utility called [grep][grep] to construct search queries of the EZproxy logs
and deduce usage of specific electronic resources. 
Since both methods require sifting through log entries like the one I highlighted above, the process requires some sleuthing, testing, time,
and patience.
However, once figured out, the process and reports can easily be automated.

## Conclusion

Librarians used a variety of techniques to collect usage data in the print era,
but like many things we've learned about, electronic resources have complicated things.
First, because more data is available about usage with electronic resources, before that data can be used, it has to be defined.
Project Counter is an attempt to define what usage means and how to report it.

Quantitative metrics should will never be able to provide a complete picture of how a library's collections are used,
but they are an important part.
Not only do they help librarians manage their collections, they also help librarians show proof of their collection's importance to their communities.
Furthermore, with a little skill, practice, and creativity, usage logs can also be used to build cool apps (Zou, 2015)
or help fill in the gaps when vendors fall short in their requirements (Smith & Arneson, 2017).

With all this data, though, comes a host of privacy issues, which we discuss in the next and last section.

## Readings / References

Pesch, O. (2017).
COUNTER release 5: What’s new and what it means to libraries.
*The Serials Librarian, 73*(3–4), 195–207.
[https://doi.org/10.1080/0361526X.2017.1391153][pesch2017]

Scott, M. (2016).
Predicting use: COUNTER usage data found to be predictive of ILL use and ILL use to be predictive of COUNTER use.
*Serials Librarian, 71*(1), 20–24.
[https://doi.org/10.1080/0361526X.2016.1165783][scott2016]

Stone, G., & Ramsden, B. (2013).
Library impact data project: Looking for the link between library usage and student attainment.
*College & Research Libraries, 74*(6).
[http://doi.org/10.5860/crl12-406][stone2013]

Zou, Q. (2015).
A novel open source approach to monitor Ezproxy Users’ activities.
*code{4}lib Journal, 29*.
[http://journal.code4lib.org/articles/10589][zou2015]

Smith, K., & Arneson, J. (2017).
Determining usage when vendors do not provide data.
*Serials Review, 43*(1), 46–50.
[https://doi.org/10.1080/00987913.2017.1281788][smith2017]

[code4lib]:https://code4lib.org/
[counterv5]:https://cop5.countermetrics.org/en/5.0.3/
[ezproxyex]:https://www.oclc.org/en/ezproxy.html
[grep]:https://en.wikipedia.org/wiki/Grep
[lsadmin]:https://www.google.com/search?&q=library+systems+administrator
[pesch2017]:https://doi.org/10.1080/0361526X.2017.1391153
[projcounterappb]:https://www.projectcounter.org/2448-2/
[projcounter]:https://cop5.countermetrics.org/en/5.1/
[proqdb]:https://www.proquest.com/databases/advanced?accountid=11836
[scott2016]:https://doi.org/10.1080/0361526X.2016.1165783
[smith2017]:https://doi.org/10.1080/00987913.2017.1281788
[stone2013]:https://doi.org/10.5860/crl12-406
[zou2015]:https://journal.code4lib.org/articles/10589
[zou2]:https://web.archive.org/web/20210716020704/https://acrl.ala.org/techconnect/post/analyzing-ezproxy-logs/
[us_retention]:https://nces.ed.gov/ipeds/TrendGenerator/app/answer/7/32
[lista]:https://libguides.uky.edu/803

