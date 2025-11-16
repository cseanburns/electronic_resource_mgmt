# Evaluation and Statistics

By the end of this section, you will understand that:

- Measuring electronic resource usage involves complexities due to the varied ways users interact with content.
- Web server logs can provide valuable data on usage, but
  they come with significant limitations and do not always capture the user's intent.
- Project COUNTER is a key initiative in standardizing how electronic resource usage is
  defined, measured, collected, and shared.
- COUNTER provides four major reports (Platform, Database, Title, Item), and
  each offers insight at different levels of electronic resource usage, which are crucial for informed decision-making.
- Usage metrics not only help in assessing the value of electronic resources but
  also contribute to collection development and budget justification.
- The effective use of metrics often involves both quantitative and qualitative approaches
  to provide a fuller picture of library impact.
- Creativity and technical skills can enhance the analysis of usage data,
  such as transforming access logs into dynamic visual tools.
- Usage data is vital for libraries to demonstrate their value to stakeholders, but
  interpreting this data requires careful consideration of its context and limitations.

## Introduction

Measuring electronic resource usage seems straightforward.
For example, consider the following scenario:
a user clicks the link, a server logs the event, and then a librarian (or a vendor) counts the numbers (i.e., clicks).
However, usage is a conceptually difficult area of ERM work.
Although logs record activity, activity is not the same as intent, engagement, or value.
Plus, vendors will want define usage differently than librarians, and librarians must make decisions
and perhaps negotiate with vendors, about what defines usage.

The complexity is a result of the infrastructure used to provide e-resources.
We have platforms, authentication systems, link resolvers, and more.
Each of these layers can distort what *usage* appears to be.
A click may indicate genuine interest in an item in the collection, but
it could also indicate accidental navigation, simple perusal, a bot, or a failed access attempt.
Even when we have detailed log files, these files cannot reveal what a patron wanted to accomplish or
whether their information or document needs were met.

Standardization efforts such as Project Counter exist because of this ambiguity.
Usage will always be difficult to define, based simply on what computers are able to capture,
but COUNTER provides a shared vocabulary so that librarians, vendors, and
[systems librarians][lsadmin] can talk about usage in consistent terms.

### A Scenario about Log Ambiguity

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
If we could, how much should would it cost?
In short, log data like this can't really capture the user's *intent*.

> Note that we can learn a lot from web server access logs, and there is software, like Google Analytics,
> that would be able to collect additional usage data.

Let's make this clearer.
Imagine a student clicks a link to a journal article in their library's discovery system.
The link resolver routes them to a publisher page, but the PDF fails to load.
The student refreshes the page a few times, and then gives up.

In the access logs, this appears like so:

- multiple **successful** GET requests,
- a sequence of redirects,
- and several full-text requests.

According to the logs, therefore, this looks like heavy usage.
However for the student, it was a total access failure.
Logs thus count actions and not necessarily success, and it's important to understand this because these resources cost.

## Project Counter

Project Counter is the primary attempt to standardize how usage is defined, measured, collected, and shared.
As a Code of Practice, it provides informative and consistent reporting of electronic resource usage.
From [Project Counter][projcounter]:

> Since its inception in 2002,
> COUNTER has been focused on providing a code of practice that helps ensure librarians
> have access to consistent, comparable, and credible usage reporting for their online scholarly information.
> COUNTER serves librarians, content providers, and
> others by facilitating the recording and exchange of online usage statistics.
> The COUNTER Code of Practice provides guidance on data elements to be measured and definitions of these data elements,
> as well as guidelines for output report content and formatting and requirements for data processing and auditing.
> To have their usage statistics and reports designated COUNTER compliant,
> content providers MUST provide usage statistics that conform to the current Code of Practice.

This code of practice was designed to solve a problem that will likely never be solved altogether, but
it's still helps to make usage meaningful across platforms.

The main goal of Project Counter is to provide usage reports that standardize what is counted and how it is counted.
The reports, for Counter release 5, cover four major types:

* Platforms
* Databases
* Titles
* Items

[Pesch (2017)][pesch2017] provides a helpful introduction to the history of Project Counter and
the migration from Counter version 4 to version 5.
Table 1 in the Pesch article describes the four major reports (listed above).
These reports include usage metrics at the broadest level and of things like
EBSCOhost databases, ProQuest databases, SAGE resources, Web of Science databases, and so on.
These reports come into play when users/patrons search in the overall platform but
not in any single database provided by the platform.
For example, a library may subscribe to the ProQuest Databases and that may include [tens of primary databases][proqdb].
Users can search multiple databases at the same time or search any single one.
The same holds for platforms like EBSCOhost, Web of Science, and others.

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
By emphasizing transparency and accuracy,
COUNTER 5.1 aims to make usage statistics more actionable for libraries and content providers.
This provides justification of resource investment and can help improve the user experience.

[Scott (2016)][scott2016] illustrates a nice use case for how Counter reports can inform collection development.
We've addressed the *Big Deal* packages that more libraries are trying to move away from
because such deals often include access to titles that are not used or not relevant to a library community.
Here Scott shows that it might be possible to avoid subscribing to some services using this data,
but it's also important to closely read through and understand the problems associated with interlibrary loan, the metrics,
and other limitations described in the Conclusion section of this article.

## The Value of Metrics

COUNTER helps standardize what we count, but librarians have a broader question:
what does usage mean for institutional value?
Librarians and administrators rely on metrics because they help justify budgets and programs, and
usage data can help construct those narratives.
[Stone and Ramsden (2013)][stone2013] offer such an example about how metrics
can be used to assess the value a library creates for its institution.
Here Stone and Ramsden investigate the correlation (not causation) between library usage and student retention.
Increasing the latter is the Holy Grail of college and universities.
The more students who attend college or university and finish, the more successful the college or university's mission is.
However, universities struggle with keeping students and often lose nearly [25% of their students][us_retention] each year.
Stone and Ramsden are able to show a correlation between e-resource usage and student retention.
This provides some evidence to administrators that libraries and their collections support a university's mission.
If this were a public library report, it might be interesting to see how well e-resource usage,
such as with ebooks or audiobooks, correlates with the outcomes desired by the library.
But note that one interesting thing about the Stone and Ramsden article is that
it does not depend on quantitative metrics alone but supports its findings through qualitative research.
There's only so much a usage metric can say.

## Using Metrics

Standardized reports may be buttressed with the logs generated by local systems, such
as authentication logs, link resolver logs, server logs, etc.
This may require some technical and data analytic know-how, and thus
I would like you to be aware of the [*code\{4\}lib* journal][code4lib],
which is a great source for the technical aspects of librarianship, and the article by [Zou][zou2015].
This article overlaps with some security issues, a topic that we'll cover in the final chapter,
but it also provides a way of thinking outside the box about the metrics that
you have access to as an electronic resource librarian.
Here, Zou describes a process of taking EZproxy logs (compare the example entry with the web server entry I included above)
and turning them into something useful and dynamic by incorporating additional technologies.
[EZproxy][ezproxyex] is software that authenticates users and provides access given that authentication.
Zou specifically references [the standard way][zou2] of analyzing these logs (take a look at the page at that link),
which can be insightful and helpful, but Zou's method makes the analysis of these logs more visual and real-time.
The main weakness with Zou's method is that it seems to me to be highly dependent on Zou doing the work.
If Zou leaves their library, then this customized analysis might not last.
Still, it's good to know that if you have an interest in developing skills with systems administration,
with other technologies, and with some basic scripting language, this kind of thing, and more, is possible.

## Getting Creative

[Smith & Arneson (2017)][smith2017] detail creative and fun ways to collect usage data about
resource usage when vendors do not provide usage data.
In the first part of this article, Smith describes how they analyzed their link resolver reports
to infer what users were accessing in their collections.
Arneson's section describes using a Linux file search utility called [grep][grep]
to construct search queries of the EZproxy logs and deduce usage of specific electronic resources. 
Since both methods require sifting through log entries like the one I highlighted above,
the process requires some sleuthing, testing, time, and patience.
However, once figured out, the process and reports can easily be automated.

## Conclusion

Librarians used a variety of techniques to collect usage data in the print era, but again,
electronic resources have complicated things.
First, because more data is available about usage with electronic resources,
before that data can be used, it has to be defined.
Project Counter is an attempt to define what usage means and how to report it.

Quantitative metrics will never provide a complete picture of how a library's collections are used,
but they are an important part.
Not only do they help librarians manage their collections,
they also help librarians show proof of their collection's importance to their communities.
Furthermore, with a little skill, practice, and creativity, usage logs can also be used to build cool apps (Zou, 2015)
or help fill in the gaps when vendors fall short in their requirements (Smith & Arneson, 2017).

But note, all of these methods depend on some form of data.
Before that data can be used responsively, it must be handled ethically.
That is, the same data that makes usage analysis powerful also raises privacy concerns,
which we explore in the last chapter.

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

