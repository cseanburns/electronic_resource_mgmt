# Interoperability

By the end of this lecture, you should be able to:

1. Understand the challenges and complexities of accessing library resources, particularly those behind paywalls.
1. Explain the role of OpenURL link resolvers in enhancing interoperability between different library services.
1. Identify the technological issues involved in linking to the main source of a resource, especially when multiple discovery platforms are involved.
1. Analyze how metadata embedded in URLs facilitates access to library resources.
1. Demonstrate how to set up library links in Google Scholar to enhance resource accessibility.
1. Dissect and understand the components of an OpenURL and their importance in library systems.
1. Evaluate the effectiveness of link resolver technology from both system and user perspectives based on case studies.

## Introduction

This section examines the complications that arise when accessing paywalled materials.
Managing electronic resources in libraries involves a complex web of technologies and services,
each presenting its own set of challenges.
One challenge is the intricacy of navigating paywalls to access a library's digital content.
We explore how technologies like OpenURL link resolvers streamline
this process and enhance interoperability across multiple services.
We define interoperability as the ability of library systems and vendor platforms to communicate with each other
through standards and protocols, like [OpenURL][openurl_wiki], in order to provide access a library's collections.

## Problem

We take interoperability on the web for granted.
Being able to seamlessly follow links to websites and webpages and acquire access or do so with minimal fuss
is one reason the web has been so successful.

However, it gets complicated when we want access to works that are behind paywalls,
despite where such works have been found:
search engines, bibliographic databases, OPACs (online public access catalogs), or discovery services.
In these cases, direct links to works identified in these services
may not provide full text access without asking for payment from the user.
For example, we might do a search on *Google Scholar*,
find an article we think looks highly relevant to our information needs,
click on the link, only to find that the publisher's site is asking us to pay $35 for access.

What complicates this is that access is often provided through third-party services,
not solely the publisher's default site.
Examples of these third-party services include bibliographic databases like EBSCOhost or ProQuest.
Thus, if we had started our search not in *Google Scholar* but in an EBSCOhost database,
and then came across the same article, we might find that our library subscribes to its journal,
and that we do have access.

Furthermore, libraries provide multiple discovery points and ways to access the same works,
such as through bibliographic databases with overlapping scopes.
Thus, we might find that the same hypothetical article we described above could be found
not only in an EBSCOhost database but also a ProQuest database.

On top of that, bibliographic databases index hundreds or thousands of titles and works,
and therefore can tell us that an item exists when we search for it.
But we might find that even though the database shows us that an article exists,
we might find that our library does not subscribe to the publication,
or the item might be in the stacks, stored off site, or at another library altogether.

These issues introduce layers of complexity.
This includes the need for proxy servers for user authentication, which complicate access further.

### Example

Consider the journal *Serials Librarian*.
It is published by *Taylor &amp; Francis Online* / *Routledge*.
It has the following site as its homepage:

[https://www.tandfonline.com/journals/wser20](https://www.tandfonline.com/journals/wser20)

The journal is indexed in *EBSCOhost*'s [Library, Information Science & Technology Abstracts][lista] (LISTA) database.
It is also indexed in *ProQuest*'s [Social Science Premium Collection][sspc] (SSPC) database.
It's also indexed in *Google Scholar*, *Google Search*, a library's discovery platform, and
other databases and search engines.
This means that an article like the following can show up based on a query on any of the above platforms.
This is true even if none of these search or discovery platforms provide full text access to the article:

> Brown, D. (2021). "Through a glass, darkly:: Lessons learned starting over as an electronic resources librarian. *The Serials Librarian,
> 81*(3–4), 246–252. [https://doi.org/10.1080/0361526X.2021.2008581][brown2021]

All these **access points** are good for the user, but they present a technological problem, too.
That problem is: how do I link to the main source?

## Link Resolvers

One way to know if our library provides access to the above source and others like it is through a **link resolver**.
We see a link resolver in action when we see a **View Now @** button or link.
When we click on that button or link in a database like the above mentioned LISTA or SSPC, we trigger the link resolver.
That routes us through the library's discovery service.
In *LISTA* at my university, that link looks like this:

```
https://web-p-ebscohost-com.ezproxy.uky.edu/ehost/SmartLink/OpenIlsLink?sid=9508afc3-4f38-4b9d-b680-71981313e0dd@redis&vid=5&sl=smartlink&st=ilslink_new&sv=sdbn%253Dlxh%2526pbt%253DAcademic%2520Journal%2526issn%253D0361526X%2526ttl%253DSerials%252520Librarian%2526stp%253DC%2526asi%253DY%2526ldc%253D%2526lna%253DAlma%252520Linking%2526lca%253DfullText%2526lo_an%253D156075536&su=https%3A%2F%2Fsaalck-uky.primo.exlibrisgroup.com%2Fopenurl%2F01SAA_UKY%2F01SAA_UKY%3AUKY%3FID%3Ddoi%3A10.1080%252F0361526X.2021.2008581%26genre%3Darticle%26atitle%3D%2522Through%2520a%2520Glass%252C%2520Darkly%2522%253A%2520Lessons%2520Learned%2520Starting%2520over%2520as%2520an%2520Electronic%2520Resources%2520Librarian.%26title%3DSerials%20Librarian%26issn%3D0361526X%26isbn%3D%26volume%3D81%26issue%3D3%252F4%26date%3D20220701%26au%3DBrown%2C%20Daniel%26spage%3D246%26pages%3D246-252%26sid%3DEBSCO%3ALibrary%252C%2520Information%2520Science%2520%2526%2520Technology%2520Abstracts%3A156075536
```

In *Social Science Premium Collection*, the link looks like this:

```
https://www.proquest.com/docview.accesstofulltextlinks.detailsorabstractoutboundlinks.externallink:externallink/https:$2f$2fsaalck-uky.primo.exlibrisgroup.com$2fopenurl$2f01SAA_UKY$2f01SAA_UKY:UKY$3furl_ver$3dZ39.88-2004$26rft_val_fmt$3dinfo:ofi$2ffmt:kev:mtx:journal$26genre$3darticle$26sid$3dProQ:ProQ$253Alibraryscience$26atitle$3d$2526ldquo$253BThrough$2ba$2bGlass$252C$2bDarkly$2526rdquo$253B$253A$2bLessons$2bLearned$2bStarting$2bover$2bas$2ban$2bElectronic$2bResources$2bLibrarian$26title$3dThe$2bSerials$2bLibrarian$26issn$3d0361526X$26date$3d2021-11-01$26volume$3d81$26issue$3d3-4$26spage$3d246$26au$3dBrown$252C$2bDaniel$26isbn$3d$26jtitle$3dThe$2bSerials$2bLibrarian$26btitle$3d$26rft_id$3dinfo:eric$2f$26rft_id$3dinfo:doi$2f10.1080$252F0361526X.2021.2008581/MSTAR_2645781371/LinkResolver/1193?t:ac=2645781371/Record/D137B205B8D14795PQ/1
```

Clicking either of the above links in their respective databases redirects us to my university's discovery service.

If we had clicked on *EBSCOhost*'s **View Now** link, the discovery service (Primo) link will result in the following:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY&date=20220701&issue=3%2F4&isbn=&spage=246&title=Serials%20Librarian&atitle=%22Through%20a%20Glass,%20Darkly%22:%20Lessons%20Learned%20Starting%20over%20as%20an%20Electronic%20Resources%20Librarian.&sid=EBSCO:Library,%20Information%20Science%20%26%20Technology%20Abstracts:156075536&volume=81&pages=246-252&issn=0361526X&au=Brown,%20Daniel&genre=article&ID=doi:10.1080%2F0361526X.2021.2008581
```

Look closely at those links, and you will see that the article's **metadata** is embedded in the URLs.
Among other things, you can see the publication title, the article title, the author's name, the DOI, and more.

> Reminder, **metadata** is data that provides information about other data, such as an article title, author, and DOI.
> In our examples, citation metadata provides a way to retrieve the correct resource.

That metadata is used to trigger a search query in the library's discovery platform
(at my university, that's *InfoKat Discovery* by *Primo*).
It specifically initiates a [GET HTTP Request][gethttp].
A GET HTTP Request is a way that web browsers request information or data from a server or resource
and do so via data encoded in the URL.
In this case *InfoKat Discovery* uses the metadata embedded in the URLs.

This is primarily the work of an **OpenURL** link resolver,
**which is a system that helps connect users to the full text of articles by using metadata from a citation**.
The link resolver is designed to provide access to a *target* (main content) despite the *source*
(where the item was found).
It accomplishes this by initiating queries in an OPAC or discovery platform using the metadata embedded in a URL.

OpenURL is a technical solution to the paywall problem.
Multiple discovery platforms complicate access, and link resolvers help mitigate this issue.
In short, link resolvers are designed to help users of electronic resources
access a source in a library's collection based on a citation or record
that the user discovered in a search result, an article's list of references, or
wherever else the link resolver might show up.
It is meant to work for all items in a library's collection.
This includes print items, since print items have records in the catalog or discovery service, and
those records have their own metadata-embedded URLs.

## Use Cases

Now that we have explored the overall topic, let's dive deeper into how these technologies work at a technical level.
 
### *Google Scholar* Example

Consider a search scenario in *Google Scholar*.
To start, users can affiliate themselves with a specific library through Google Scholar's settings.
Once that affiliation has been set up,
Google Scholar leverages an institution's *knowledge base* to facilitate access to paywalled content.
A **knowledge base** is a database containing details about a library's collections.

It works like this:

* **Metadata extraction**: Google Scholar extracts the article's (or other
  content) metadata, which includes details such as the title, author, DOI, and
  publication year, from its database.
* **Administrative metadata**: Additional metadata about the institution, such
  as an institutional ID number, is added to this information.
* **URL query formation**: This collective metadata is converted into a URL
  query designed to search the library's collections through its discovery
  service.
* **User presentation**: Users are presented with **target options**
  for retrieving the article, or in some cases, they are taken directly to the
  full text (e.g., if only one target option exists in their library's
  collections).

The term **target options** refers to the different ways to obtain the article or acquire access to other content.
These options may include:

* Full text access from vendors or publishers.
  This is why a record in a discovery service may have multiple links to content.
* Information about the article's physical location if available on a library's shelves.
* Options to request the work through interlibrary loan.

> To link *Google Scholar* to an affiliation:
> 
> 1. Go to [https://scholar.google.com/][googleScholar]
> 1. Open Settings
> 1. Click on the **Library Links** tab
> 1. Search for your affiliation
>     - e.g., University of Kentucky
> 1. Add and save
>
> Now when you search in *Google Scholar*,
> you should see **View Now @ UK** links if your affiliation is University of Kentucky.
> The link should be next to search results in your affiliation's collections.

> See [Link Resolver 101][mcdonald2004] for additional details and this historical piece on link resolvers
> (McDonald & Van de Velde, 2004).
> Also, [Alma provides Google Scholar][googlescholaralma] documentation that is useful to read through.
> See also [Google Scholar's][gslibrary] documentation.

Consider conducting a basic keyword search in *Google Scholar* using the term `electronic resources`.
If you are affiliated with a specific library,
you should see a **View Now @ [institution]** link next to at least some of the search results.
Clicking that link will reveal the OpenURL, which contains the article's metadata and identifies Google as the source:

```
https://saalck-uky.primo.exlibrisgroup.com/openurl/01SAA_UKY/01SAA_UKY:UKY?sid=google&auinit=PS&aulast=Dadzie&atitle=Electronic+resources:+access+and+usage+at+Ashesi+University+College&id=doi:10.1108/10650740510632208
```

The original publisher of this article is *Emerald*, and the full text is available through *Emerald eJournals Premier*.
This information is processed by *Primo*, UK's discovery and delivery service.
*Primo* redirects our query to the UK Library's proxy service,
which is **OpenAthens** (as of the summer of 2023, formerly it was **EZProxy**).
After securely authenticating through our university account login, we gain access to the full text from Emerald.

Should alternative databases like *EBSCOhost* and/or *ProQuest* provide access,
*Primo* would present us with options to select our preferred database for viewing the full text.

In scenarios where there is only one source to the content provided by the library,
the transfer to *Primo* to OpenAthens to the Emerald full-text occurs swiftly,
providing (hopefully) a seamless user experience.

## Dissecting an OpenURL

Understanding the anatomy of an OpenURL can help us comprehend how metadata is
transmitted and processed within library systems.
Let's dissect a specific *Primo* URL to identify its individual components.

The following Primo URL is an OpenURL link, which means *Primo* follows the OpenURL standards.
(See [ANSI/NISO Z39.88-2004 (R2021) The OpenURL Framework for Context-Sensitive Services][nisoOpenURL].
It is composed of fields and values that make up the metadata.
For readability, I have broken up the URL into individual lines by metadata fields.
The metadata fields begin after the `openurl?` keyword:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?
institution=01SAA_UKY&
vid=01SAA_UKY:UKY&
aulast=Dadzie&
id=doi:10.1108%2F10650740510632208&
auinit=PS&
atitle=Electronic%20resources%20access%20and%20usage%20at%20Ashesi%20University%20College&
sid=google
```

The link resolver technology operates in the background.
It translates the metadata to allow it to interact with appropriate library services.
In this specific URL, the **institution**, **vid**, and **sid** fields serve as **administrative metadata**.
This metadata help to identify the institution and source information.
The key fields used to retrieve the article are:

- **aulast**: The author's last name
- **id**: The DOI (Digital Object Identifier)
- **auinit**: The author's first two initials
- **atitle**: The title of the article

> **Administrative metadata** is
> "data that is necessary to manage and use information resources and that is typically external to informational
> content of resources" [Society of American Archives][SAA].

These fields play crucial roles in ensuring that the correct resources are fetched from the library's database.
This makes an OpenURL an important element in providing access.

> One feature of the above URL is Percent-encoding.
> Percent encoding is a process used to encode URL-**unfriendly** characters, such as spaces, into a parsable format.
> [Percent-encoding][percentencoding] employs UTF-8 encoding.
> This is a common character encoding standard.
> Read about [UTF-8 percent-encodings][utf8] and the characters they correspond to.

### In Case of Interlibrary Loan

We can see another instance of this within *Primo* itself.
Let's say that in my university's version of InfoKat,
I search for the phrase `electronic resources` and filter by the *WorldCat* options.
By filtering for *WorldCat* options, I'm more likely to retrieve records that are not in UK Library's collections.

The first option is a work titled **Electronic Resources. Selection and bibliographic control.**
Since this is not available via UK Libraries, I would have to request the item through interlibrary loan.
When I do that, the link resolver triggers [ILLiad][illiadopenurl], which is used for interlibrary loan.
Note how the OpenURL looks much different here.
Essentially, the OpenURL is contextual.
Its context reflects the service being used (e.g., *EBSCOhost*, *ProQuest*, *Google Scholar*, *Primo*, *ILLiad*, etc.).
The service used determines the metadata elements in the URL.
Note that some elements are empty.
For example, **rft.date=&** is an empty value for the date field versus **rft.genre=book&**,
which holds the value **book** for the genre field.
This demonstrates that some metadata fields are optional.

```
https://lib.uky.edu/ILLiad/illiad.dll?
Action=10&
Form=30&
rft.genre=book&
rft.au=Pattie%2C+Ling-yuh+W.&
rft.title=&
rft.title=Electronic+resources.+Selection+and+bibliographic+control&
rft.stitle=&
rft.atitle=&
rft.date=&
rft.month=&
rft.volume=&
rft.issue=&
rft.number=&
rft.epage=&
rft.spage=&
rft.edition=&
rft.isbn=1000111849&
rft.eisbn=&
rft.au=Pattie,&
rft.auinit=L&
rft.pub=CRC+Press&
rft.publisher=&
rft.place=Boca+Raton&
rft.doi=&
rfe_dat=1196192673&
rfr_id=
```

> **📌 Aside: What Happened to OpenURL in Primo VE?**
>
> Until **very** recently,
> discovery platforms (including Primo) leaned heavily on **OpenURL**,
> a standards-based way of passing citation metadata (author, title, DOI, etc.) into a link resolver.
> This openness meant links were portable:
> any database could pass metadata, and the resolver decided which full-text copy to serve.
>
> With Primo VE, Ex Libris has shifted much of its linking toward **record-ID based deep links**
> (e.g., `fulldisplay?docid=alma...`).
> These links jump straight to a record in Primo VE rather than carrying metadata through an OpenURL.
> They are supposedly faster inside the Ex Libris ecosystem but they are definitely less interoperable:
> the link is system-specific, opaque, and harder to reuse outside of Primo.
>
> The OpenURL resolver still exists,
> but users who copy links directly from Primo's interface increasingly encounter these closed, ID-based URLs
> rather than portable, metadata-driven OpenURLs.
>
> Primo VE record-based link:
>
> ```
> https://saalck-uky.primo.exlibrisgroup.com/discovery/fulldisplay?
> docid=alma9941323157502636&
> context=L&
> vid=01SAA_UKY:UKY&
> lang=en&
> search_scope=MyInst_and_CI&
> adaptor=Local%20Search%20Engine&
> tab=Everything&
> query=any%2Ccontains%2Celectronic%20resources&
> offset=0
> ```
> 
> See: [Primo VE Overview][primo_ve] and [Primo VE Deep Links][primo_ve_deep_links].

## Readings

Our readings this week by [Kasprowski (2012)][kasprowski2012], [Johnson et al. (2015)][johnson2015],
and [Chisari et al. (2017)][chisare2017]
discuss link resolver technology, migration to new link resolver services, and
methods to evaluate link resolver technology from both the systems and a user's perspective.
While it may not be necessary to master OpenURL syntax or the intricacies of link resolver URL formatting,
as demonstrated here (and in Appendix A),
it's beneficial to acquire a basic understanding of how these URLs function in this process.

Let me re-emphasize that the key way that link resolvers work is
by embedding citation metadata within the link resolver URL,
including administrative metadata.
For this to work, it means we need high quality metadata for our records, as our readings note.
If we receive a report, perhaps reported by a library patron, about a broken link in this process,
the cause could be incorrect or outdated metadata.
However, as reported by [Montavon-Green (2023)][montavon2023], other issues that cause link resolver errors include:
titles are not indexed even though the library provides access to them;
titles are indexed but patrons are directed to a paywall;
glitches in some technology such as a vendor platform; and usability issues.
Knowing the parts of this process aids us in deciphering possible errors that exist when the technology breaks.

For this week, see the *ExLibres Alma* link resolver documentation.
Let's discuss this documentation in the forum.
I want you to find and explain other instances of link resolvers.
Be sure to provide links to these examples and articulate ways the technology can be evaluated.

**Documentation to read and discuss:**

[Link Resolver, Usage][lrusage]

## Additional information

- [OpenURL Crossref Documentation][openurlCrossref]
- [URL syntax components][urlsyntax]
- [URL Encode / Decode Percent Encoding][urlencode]
- [How Google Scholar works with libraries][howgs]
- [Surface your materials in Google Scholar (OCLC)][worldshare]
- [360 KB: Overview of the Knowledgebase][exlibrisKB]

## Appendix A

### How I Enhanced Zotero by Hacking OpenURL

Since OpenURL compatible link resolver technology is partly based on [query strings][querystring],
we can glean all sorts of information by examining these URLs:
the query string component contains the metadata for the source and the base component contains the vendor, institutional information, and the URL type.
When I worked on this section, I was able to learn that *Primo/Alma* uses two URL types to request resources: a search URL and an OpenURL.
We can see this the URLs.
The base search URL looks like this:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/search?
```

The base OpenURL differs just a bit (see the end of the URL):

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?
```

The base search URL appears when searching the university's discovery service.
However, the OpenURL only appears when needed and during transit between the source and before reaching the target:
e.g., after clicking on a **View Now @ UK** link and before being redirected to the full text version.
I copied my institution's specific OpenURL when I clicked on a **View Now @ UK** link and before it redirected to the [OpenAthens][openathens] page.

In a previous semester,
one of my students in my electronic resource management class noticed that [Zotero][zotero] has a
[locate menu][locateMenu].
The locate menu uses OpenURL resolvers to look up items in a library.
By default, Zotero uses *WorldCat*, but it can use a specific institution's OpenURL resolver.
I had forgotten about this.
When I investigated whether my institution was listed in the Zotero locate menu,
I found that it was not listed on Zotero's page of [OpenURL resolvers][openurlResolvers].

At the time, I didn't know what my institution's exact OpenURL was,
but I was able to figure it out by comparing the syntax and values from other Primo URLs listed on Zotero's page of OpenURL resolvers.
By comparing these OpenURLs,
I was able to derive my institution's specific OpenURL (base component plus institutional info), which is:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY
```

I added that to Zotero, and it worked.
Then I posted the OpenURL info to Zotero's forum, and they added it to their OpenURL resolver page.
If others are curious about how to add this info to Zotero, [another library][sacredheart] has created a video on this.
The directions cover adding a specific OpenURL to Zotero and on how to use Zotero's Library Lookup functionality.

## Appendix B

Use the [`trurl`][trurl] command to parse URLs.
The following `trurl` command decomposes the Primo URL into its major components.
The output is sent to the [`jq`][jq] command to clean up the output.

Example command on Primo URL:

```
trurl "https://saalck-uky.primo.exlibrisgroup.com/discovery/search?query=any,contains,electronic%20resource%20management&tab=Everything&search_scope=MyInst_and_CI&vid=01SAA_UKY:UKY&mfacet=rtype,include,articles,1&mfacet=searchcreationdate,include,2010%7C,%7C2025,1&mfacet=lang,include,eng,1&offset=0" --json --sort-query | jq .
```

Example output of Primo URL:

```
[
  {
    "url": "https://saalck-uky.primo.exlibrisgroup.com/discovery/search?mfacet=lang%2cinclude%2ceng%2c1&mfacet=rtype%2cinclude%2carticles%2c1&mfacet=searchcreationdate%2cinclude%2c2010%7c%2c%7c2025%2c1&offset=0&query=any%2ccontains%2celectronic+resource+management&search_scope=MyInst_and_CI&tab=Everything&vid=01SAA_UKY%3aUKY",
    "parts": {
      "scheme": "https",
      "host": "saalck-uky.primo.exlibrisgroup.com",
      "path": "/discovery/search",
      "query": "mfacet=lang,include,eng,1&mfacet=rtype,include,articles,1&mfacet=searchcreationdate,include,2010|,|2025,1&offset=0&query=any,contains,electronic resource management&search_scope=MyInst_and_CI&tab=Everything&vid=01SAA_UKY:UKY"
    },
    "params": [
      {
        "key": "mfacet",
        "value": "lang,include,eng,1"
      },
      {
        "key": "mfacet",
        "value": "rtype,include,articles,1"
      },
      {
        "key": "mfacet",
        "value": "searchcreationdate,include,2010|,|2025,1"
      },
      {
        "key": "offset",
        "value": "0"
      },
      {
        "key": "query",
        "value": "any,contains,electronic resource management"
      },
      {
        "key": "search_scope",
        "value": "MyInst_and_CI"
      },
      {
        "key": "tab",
        "value": "Everything"
      },
      {
        "key": "vid",
        "value": "01SAA_UKY:UKY"
      }
    ]
  }
]
```

Example command on Google Scholar URL:

```
trurl "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C18&q=electronic+resource+management&oq=&inst=644821257881216646" --json -sort-query
```

Example command of Google Scholar URL:

```
[
  {
    "url": "https://scholar.google.com/scholar?as_sdt=0%2c18&hl=en&inst=644821257881216646&oq=&q=electronic+resource+management",
    "parts": {
      "scheme": "https",
      "host": "scholar.google.com",
      "path": "/scholar",
      "query": "as_sdt=0,18&hl=en&inst=644821257881216646&oq=&q=electronic resource management"
    },
    "params": [
      {
        "key": "as_sdt",
        "value": "0,18"
      },
      {
        "key": "hl",
        "value": "en"
      },
      {
        "key": "inst",
        "value": "644821257881216646"
      },
      {
        "key": "oq",
        "value": ""
      },
      {
        "key": "q",
        "value": "electronic resource management"
      }
    ]
  }
]
```

See [Google Scholar API][gs_api] for an explanation of the parameters used in Google Scholar.

## Readings / References

Chisare, C., Fagan, J. C., Gaines, D., & Trocchia, M. (2017).
Selecting link resolver and knowledge base software: Implications of interoperability.
*Journal of Electronic Resources Librarianship, 29*(2), 93–106.
[https://doi.org/10.1080/1941126X.2017.1304765][chisare2017]

Johnson, M., Leonard, A., & Wiswell, J. (2015).
Deciding to change OpenURL link resolvers.
*Journal of Electronic Resources Librarianship, 27*(1), 10–25.
[https://doi.org/10.1080/1941126X.2015.999519][johnson2015]

Kasprowski, R. (2012).
NISO's IOTA initiative: Measuring the quality of openurl links.
*The Serials Librarian, 62*(1–4), 95–102.
[https://doi.org/10.1080/0361526X.2012.652480][kasprowski2012]

## Additional References

McDonald, J., & Van de Velde, E. F. (2004, April 1).
The lure of linking. *Library Journal*. Library Journal Archive Content.
[https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/][mcdonald2004]

Montavon-Green, J. (2023).
Link resolver survival skills: Using a team-based approach to diagnosing and fixing link resolver problems
Serials Spoken Here.
*Serials Review, 49*(3–4), 116–124.
[https://doi.org/10.1080/00987913.2023.2174400][montavon2023]

[brown2021]:https://doi.org/10.1080/0361526X.2021.2008581
[chisare2017]:https://doi.org/10.1080/1941126X.2017.1304765
[exlibrisKB]:https://knowledge.exlibrisgroup.com/360_KB/Knowledge_Articles/360_KB%3A_Overview_of_the_Knowledgebase
[gethttp]:https://www.w3schools.com/tags/ref_httpmethods.asp
[googlescholaralma]:https://knowledge.exlibrisgroup.com/Alma/Product_Documentation/010Alma_Online_Help_(English)/090Integrations_with_External_Systems/030Resource_Management/150Publishing_Electronic_Holdings_to_Google_Scholar
[googleScholar]:https://scholar.google.com
[gs_api]:https://serpapi.com/google-scholar-api
[gslibrary]:https://scholar.google.com/intl/en/scholar/libraries.html
[howgs]:https://scholar.google.com/intl/en/scholar/libraries.html
[illiadopenurl]:https://support.atlas-sys.com/hc/en-us/articles/360011910073-OpenURL-Configuration
[johnson2015]:https://doi.org/10.1080/1941126X.2015.999519
[jq]:https://jqlang.org/
[kasprowski2012]:https://doi.org/10.1080/0361526X.2012.652480
[lista]:https://libguides.uky.edu/803
[locateMenu]:https://www.zotero.org/support/locate
[lrusage]:https://knowledge.exlibrisgroup.com/Alma/Product_Materials/050Alma_FAQs/E-Resource_Management/Link_Resolver%2C_Usage
[mcdonald2004]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/
[montavon2023]:https://doi.org/10.1080/00987913.2023.2174400
[nisoOpenURL]:https://www.niso.org/publications/z3988-2004-r2010
[openathens]:https://www.openathens.net/
[openurlCrossref]:https://www.crossref.org/documentation/retrieve-metadata/openurl/
[openurlResolvers]:https://www.zotero.org/support/locate/openurl_resolvers
[openurl_wiki]:https://en.wikipedia.org/wiki/OpenURL
[percentencoding]:https://en.wikipedia.org/wiki/Percent-encoding
[querystring]:https://en.wikipedia.org/wiki/Query_string
[SAA]:https://dictionary.archivists.org/entry/administrative-metadata.html
[sacredheart]:https://library.sacredheart.edu/zotero/advanced/usingLibraryLookup
[sspc]:https://libguides.uky.edu/3355
[trurl]:https://curl.se/trurl/
[urlencode]:https://www.url-encode-decode.com/
[urlsyntax]:https://tools.ietf.org/html/rfc3986#page-16
[utf8]:https://www.w3schools.com/tags/ref_urlencode.asp
[worldshare]:https://help.oclc.org/Metadata_Services/WorldShare_Collection_Manager/Choose_your_Collection_Manager_workflow/Knowledge_base_collections/Use_collection_data_with_other_services/Surface_your_materials_in_Google_Scholar
[zotero]:https://www.zotero.org/
[primo_ve]:https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/010Getting_Started_with_Primo_VE/005Primo_VE_Overview
[primo_ve_deep_links]:https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/120Other_Configurations/Configuring_Redirection_for_Primo_VE_Deep_Links
