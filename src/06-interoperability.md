# Interoperability

By the end of this lecture, you should be able to:

1. Understand the challenges and complexities of accessing library resources, particularly those behind paywalls.
1. Explain the role of OpenURL link resolvers in enhancing interoperability between different library services.
1. Identify the technological issues involved in linking to the appropriate copy of a resource, especially when multiple discovery platforms are involved.
1. Analyze how metadata embedded in URLs facilitates access to library resources.
1. Demonstrate how to set up library links in Google Scholar to enhance resource accessibility.
1. Dissect and understand the components of an OpenURL and their importance in library systems.
1. Evaluate the effectiveness of link resolver technology from both system and user perspectives based on case studies.

## Introduction

To demonstrate how library systems interact with each other, in this section we examine some complications related to accessing paywalled materials and sources from multiple providers
and their solutions.

Managing electronic resources in libraries involves a complex web of technologies and services, and each presents its own set of challenges.
One challenge is the intricacy of navigating paywalls to access a library's digital content, especially content that may be sourced by multiple providers.
We explore how technologies like OpenURL standards compliant link resolvers streamline this process and enhance interoperability across multiple services.
We define interoperability as the ability of library systems and vendor platforms to communicate with each other through standards and protocols, like [OpenURL][openurl_wiki],
in order to provide access to a library's collections.

## Linking: Problem Statement

We take interoperability on the web for granted.
Being able to seamlessly follow links to websites and webpages and acquire access or do so with minimal fuss is one reason the web has been so successful.

However, it gets complicated when we want to access paywalled works.
Direct links to works to the publisher's version of an article may not provide full text access without asking for payment from the user.
For example, we might search in *Google Scholar* or [*Crossref*][crossref], find an article we think looks highly relevant for our information needs,
click on the link, and then find that the publisher's site is asking us to pay $35 for access.

If we have access to these articles, e.g., through our library's subscriptions to them, then how can the library interject itself in the middle of this process
so that we are not asked to pay for the article?
That is, how can the library route a link to a source through the library's systems so that the link takes us to the full text, if the library has the full text in its collections?
Or in other words: how can the library facilitate the process of linking so that accessing paywalled content is as potentially seamless as accessing any content on the web?

Part of what complicates this is that access is often provided through third-party services and not directly on the publisher's website.
For example, we might have access to the full text of an article in an *EBSCOhost*, *ProQuest*, *Gale*, or *JSTOR* full text database,
because our library subscribes to those, even if we do not have access to the publisher's full text original version.
This is because a library might be able to provide access through a full text database that provides full text to hundreds or thousands of journal titles, but
the library may not individually subscribe to many of those titles.

What complicates this even more is that libraries can provide multiple access points to the same works, such as through bibliographic databases with overlapping scopes.
We might find that the same article could be found not only in an *EBSCOhost* social sciences database but also a *ProQuest* social sciences database or in *JSTOR*, etc.
In such cases, how does a discovery system know which link to provide?
The *EBSCOhost* link, the *ProQuest* link, or the *JSTOR* link?

And on top of that(!), bibliographic databases index thousands of titles and therefore can tell us that an item exists when we search for it.
But we might find that even though the database shows us that an article exists, we might find that our library does not subscribe to the publication, or the item might be in the stacks or stored off site.
Some bibliographic databases, like *Scopus* and *Web of Science*, are not full text databases.
They only index the literature.
Once again, how can a library generate a link to help solve this kind of problem (e.g., by routing us through an interlibrary loan service)?

It should seem apparent then that these issues introduce multiple layers of complexity.
One way to resolve this is through authentication services, like proxy servers or single sign-on services, which we cover in the next section.
Another way to solve this problem is through link resolvers using the [OpenURL standard][openurl_niso].
Libraries use both of these methods in tandem because link resolution identifies where and how a user can obtain a resource through a library, and
authentication identifies whether a user is authorized to access the resource.

Figure 1 helps visualize the problem:

```
STANDARD WEB LINKING
====================

                 link contains a destination URL
                              │
                              ▼
┌──────────────┐       ┌─────────────────────────┐
│  Web page A  │ ────► │  Specific resource      │
│              │       │  at a specific location │
└──────────────┘       └─────────────────────────┘

Example:

  <a href="https://publisher.example/article/123">
                         │
                         ▼
              Publisher's copy of article


The link says, essentially:

        "GO TO THIS LOCATION."


Problem in a library environment
================================

The same article might be available from several places:

                         ┌──► Publisher
                         │
 Article X ──────────────┼──► JSTOR
                         │
                         ├──► ProQuest
                         │
                         ├──► EBSCOhost
                         │
                         └──► Institutional repository

But which copy can THIS USER actually access?

A fixed URL cannot necessarily answer that question.



OPENURL LINKING
===============

   Source system
   (database, discovery service, etc.)
          │
          │  OpenURL
          │
          │  "I want this article:
          │   ISSN = ...
          │   volume = ...
          │   issue = ...
          │   pages = ...
          │   DOI = ..."
          ▼
┌───────────────────────┐
│    LINK RESOLVER      │
│                       │
│  What is this item?   │
│  What does our        │
│  library provide?     │
│  Where can the user   │
│  get it?              │
└───────────┬───────────┘
            │
            │ consults library
            │ knowledgebase
            ▼
     ┌──────────────┐
     │ Appropriate  │
     │   service    │
     └──────┬───────┘
            │
      ┌─────┼─────────────┐
      ▼     ▼             ▼
 Publisher  Aggregator   Other service
 full text  full text    (ILL, catalog,
                          repository, etc.)


The OpenURL says, essentially:

        "I WANT THIS RESOURCE."

The link resolver determines:

        "HERE IS HOW YOU CAN GET IT."

```
<figcaption>
Fig. 1. A comparison of standard web linking and linking in a library environment. Figure generated by OpenAI's ChatGPT and modified by author.
</figcaption>

### Example

Consider a journal like [*The Serials Librarian*][serials_librarian].
It is published by *Taylor &amp; Francis Online* / *Routledge*, and according to [Ulrich's Periodical Directory][ulrichs_uky], this journal is indexed in dozens of paywalled databases.
It's also indexed in open bibliographic search engines and services like *Google Scholar*, *Google Search*, [*OpenAlex*][open_alex], [*SemanticScholar*][semantic_scholar], and more.
This means that articles from that journal can show up based on a query on any of the above platforms.
This is true even if none of these search or discovery platforms provide full text access to the article.
All these **access points** are good for the user, but since the do not provide full text access, they present technological problems already described.

> Note: these databases and other scholarly search engines can link to full text if the sources they link to are available as [Open Access (OA)][oa_wiki].
> There are several types of OA models.
> From a user's perspective, Gold and Platinum OA articles are freely available on the publisher's (e.g., journal's) website.
> The Green OA model is based on self-archiving, usually via an institutional repository (e.g., [UKnowledge][uknowledge]) or a subject repository or preprint server (e.g., [arXiv] or [bioRxiv][bioRxiv]).
> Self-archived papers may themselves be of different types.
> Some journals allow authors to self-archive their papers after they have been peer-reviewed (post-print).
> Other journals only allow authors to self-archive their papers before they have been peer-reviewed (pre-print).
> And yet other journals allow self-archiving after embargoes (e.g., twelve months).
> See the [Jisc Policy Finder][jisc_oa] to search for the archiving or OA policy of a specific journal.

## Link Resolvers

Link resolvers are software products, ideally using the OpenURL standard, that solve these linking problems.
We see link resolvers in action when databases display buttons or links such as **View Now @** (See Figure 2).
When we click such buttons in a database, such as in *EBSCOhost's LISTA* (Library, Information Science and Technology Abstracts),
the database sends information about the source (the context) we found to the library's link resolver.
The link resolver then uses information (from the knowledge base) about the library's collections and services to determine whether and where the source is available.

<figure>
<img src="images/06_figure_a.png"
alt="An image of the University of Kentucky's View Now @UK button on Google Scholar"
title="The University of Kentucky's View Now @UK button on Google Scholar">
<figcaption>
Fig. 2. View Now @UK button from <em>Google Scholar</em>.
</figcaption>
</figure>

We can visualize the problem that link resolvers solve (see Figure 3).
Imagine finding an article in a *ProQuest* database (of the 100 or so that *ProQuest* provides).
*ProQuest* may not supply the full text to that article, and *ProQuest* does not need to know where the library provides access to it.
The article might be available through the publisher's website, another database provider, an aggregator such as *JSTOR*, or some other service.
All *ProQuest* needs to do is identify the article and then another system can determine how a user can obtain it.

```
RESOURCE DESCRIPTION
e.g., article/citation found in ProQuest
        │
        │  OpenURL
        │  "Here's what I know about this article"
        ▼
	LINK RESOLVER
e.g., SFX
     Alma Link Resolver
     OCLC link resolver
     360 Link
        │
        │  "What services can this library offer?"
        ▼
LOCAL KNOWLEDGE + SERVICES
e.g., institutional holdings in the knowledgebase:
     • subscribed packages
     • title coverage
     • coverage dates
     • local collections
     • linking/service rules
        │
        │  "The library says this article should
        │   be available from..."
        ▼
APPROPRIATE LOCATION / SERVICE
e.g., article at:
     • ScienceDirect
     • JSTOR
     • EBSCOhost
     • publisher platform
     • institutional repository

     OR another service:
     • catalog lookup
     • interlibrary loan
     • document delivery
        |
        |
        ▼
    Provide links.
```
<figcaption>
Fig. 3. The link resolver process, from resource description in a database to final delivery of the work. Figure generated by OpenAI's ChatGPT and modified by author.
</figcaption>

The initial steps to determine what link to provide takes place in the source's URL. 
In the *LISTA* database (an *EBSCOhost* database) at my university, a source link for a specific article might look like this:

```
https://web-p-ebscohost-com.ezproxy.uky.edu/ehost/SmartLink/OpenIlsLink?sid=9508afc3-4f38-4b9d-b680-71981313e0dd@redis&vid=5&sl=smartlink&st=ilslink_new&sv=sdbn%253Dlxh%2526pbt%253DAcademic%2520Journal%2526issn%253D0361526X%2526ttl%253DSerials%252520Librarian%2526stp%253DC%2526asi%253DY%2526ldc%253D%2526lna%253DAlma%252520Linking%2526lca%253DfullText%2526lo_an%253D156075536&su=https%3A%2F%2Fsaalck-uky.primo.exlibrisgroup.com%2Fopenurl%2F01SAA_UKY%2F01SAA_UKY%3AUKY%3FID%3Ddoi%3A10.1080%252F0361526X.2021.2008581%26genre%3Darticle%26atitle%3D%2522Through%2520a%2520Glass%252C%2520Darkly%2522%253A%2520Lessons%2520Learned%2520Starting%2520over%2520as%2520an%2520Electronic%2520Resources%2520Librarian.%26title%3DSerials%20Librarian%26issn%3D0361526X%26isbn%3D%26volume%3D81%26issue%3D3%252F4%26date%3D20220701%26au%3DBrown%2C%20Daniel%26spage%3D246%26pages%3D246-252%26sid%3DEBSCO%3ALibrary%252C%2520Information%2520Science%2520%2526%2520Technology%2520Abstracts%3A156075536
```

This is an important URL because it contains metadata for the article.
We can make it more readable by adding line breaks after each metadata field:

```
https://saalck-uky.primo.exlibrisgroup.com/openurl/01SAA_UKY/01SAA_UKY:UKY
?
ID=doi:10.1080%2F0361526X.2021.2008581
&
genre=article
&
atitle=%22Through%20a%20Glass%2C%20Darkly%22%3A%20Lessons%20Learned%20Starting%20over%20as%20an%20Electronic%20Resources%20Librarian.
&
title=Serials Librarian
&
issn=0361526X
&
isbn=
&
volume=81
&
issue=3%2F4
&
date=20220701
&
au=Brown,%20Daniel
&
spage=246
&
pages=246-252
&
sid=EBSCO:Library%2C%20Information%20Science%20%26%20Technology%20Abstracts:156075536
```

Additionally, we can remove the percent encoding to make it more readable.

> Percent encoding is a process used to encode URL-**unfriendly** characters, such as spaces or quotation marks, into a parsable format for web browsers.
> In other words, [percent-encoding][percentencoding] represents characters, like spaces, commas, and quotation marks, that cannot safely or unambiguously appear in a particular part of a URL.
> Percent-encoding uses the percent sign `%` followed by hexadecimal values, such as `%20`, which represents a space, or `%22`, which represents a double quote `"`.
> For [Unicode][unicode_wiki] text, characters are generally first represented as UTF-8 bytes and those bytes are then percent-encoded.
> Read about [UTF-8 percent-encodings][utf8] and the characters they correspond to.

```
https://saalck-uky.primo.exlibrisgroup.com/openurl/01SAA_UKY/01SAA_UKY:UKY
?
ID=doi:10.1080/0361526X.2021.2008581
&
genre=article
&
atitle="Through a Glass, Darkly": Lessons Learned Starting over as an Electronic Resources Librarian.
&
title=Serials Librarian
&
issn=0361526X
&
isbn=
&
volume=81
&
issue=3/4
&
date=20220701
&
au=Brown, Daniel
&
spage=246
&
pages=246-252
&
sid=EBSCO:Library, Information Science & Technology Abstracts:156075536
```

In *ProQuest's Social Science Premium Collection*, a link looks like this:

```
https://www.proquest.com/docview.accesstofulltextlinks.detailsorabstractoutboundlinks.externallink:externallink/
https:$2f$2fsaalck-uky.primo.exlibrisgroup.com$2fopenurl$2f
01SAA_UKY$2f01SAA_UKY:UKY$3furl_ver$3dZ39.88-2004$26rft_val_fmt$3dinfo:ofi$2ffmt:kev:mtx:journal$26genre$3darticle$26sid$3dProQ:ProQ$253Alibraryscience$26atitle$3d$2526ldquo$253BThrough$2ba$2bGlass$252C$2bDarkly$2526rdquo$253B$253A$2bLessons$2bLearned$2bStarting$2bover$2bas$2ban$2bElectronic$2bResources$2bLibrarian$26title$3dThe$2bSerials$2bLibrarian$26issn$3d0361526X$26date$3d2021-11-01$26volume$3d81$26issue$3d3-4$26spage$3d246$26au$3dBrown$252C$2bDaniel$26isbn$3d$26jtitle$3dThe$2bSerials$2bLibrarian$26btitle$3d$26rft_id$3dinfo:eric$2f$26rft_id$3dinfo:doi$2f10.1080$252F0361526X.2021.2008581/MSTAR_2645781371/LinkResolver/1193?t:ac=2645781371/Record/D137B205B8D14795PQ/1
```

This is a more readable version with line breaks and a *ProQuest* wrapper (first two lines and last two lines):

```
https://www.proquest.com/
docview.accesstofulltextlinks.detailsorabstractoutboundlinks.externallink:externallink/

https:$2f$2fsaalck-uky.primo.exlibrisgroup.com
$2fopenurl
$2f01SAA_UKY
$2f01SAA_UKY:UKY
$3furl_ver$3dZ39.88-2004
$26rft_val_fmt$3dinfo:ofi$2ffmt:kev:mtx:journal
$26genre$3darticle
$26sid$3dProQ:ProQ$253Alibraryscience
$26atitle$3d$2526ldquo$253BThrough$2ba$2bGlass$252C$2bDarkly$2526rdquo$253B$253A$2bLessons$2bLearned$2bStarting$2bover$2bas$2ban$2bElectronic$2bResources$2bLibrarian
$26title$3dThe$2bSerials$2bLibrarian
$26issn$3d0361526X
$26date$3d2021-11-01
$26volume$3d81
$26issue$3d3-4
$26spage$3d246
$26au$3dBrown$252C$2bDaniel
$26isbn$3d
$26jtitle$3dThe$2bSerials$2bLibrarian
$26btitle$3d
$26rft_id$3dinfo:eric$2f
$26rft_id$3dinfo:doi$2f10.1080$252F0361526X.2021.2008581

/MSTAR_2645781371/LinkResolver/1193
?t:ac=2645781371/Record/D137B205B8D14795PQ/1
```

Without percent-encoding and without the *ProQuest* wrapper:

```
https://saalck-uky.primo.exlibrisgroup.com/openurl/01SAA_UKY/01SAA_UKY:UKY
?
url_ver=Z39.88-2004
&
rft_val_fmt=info:ofi/fmt:kev:mtx:journal
&
genre=article
&
sid=ProQ:ProQ:libraryscience
&
atitle=...
&
title=The Serials Librarian
&
issn=0361526X
&
date=2021-11-01
&
volume=81
&
issue=3-4
&
spage=246
&
au=Brown, Daniel
&
isbn=
&
jtitle=The Serials Librarian
&
btitle=
&
rft_id=info:eric/
&
rft_id=info:doi/10.1080/0361526X.2021.2008581
```

> Note the lines: `url_ver=Z39.88-2004` and `rft_val_fmt=info:ofi/fmt:kev:mtx:journal`.
> The first explicitly defines the ANSI/NISO Z39.88-2004 standard and the second identifies the metadata format for the referent.

If we were to click on either of the above links, we would be redirected to the university's discovery service, even though those links are not discovery service links.
Instead, clicking on one of these links triggers a workflow:
An OpenURL request is sent to the library's link resolver (Alma, in my case).
The resolver parses the metadata, uses it to identify the resource, checks the library's holdings and available services, and then determines which services to offer the user (e.g., *ProQuest*, *EBSCOhost*, etc.).

After clicking on, e.g., a *EBSCOhost*'s **View Now @** link like the one above, the discovery service (Alma's Primo) link will result in the following:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY&date=20220701&issue=3%2F4&isbn=&spage=246&title=Serials%20Librarian&atitle=%22Through%20a%20Glass,%20Darkly%22:%20Lessons%20Learned%20Starting%20over%20as%20an%20Electronic%20Resources%20Librarian.&sid=EBSCO:Library,%20Information%20Science%20%26%20Technology%20Abstracts:156075536&volume=81&pages=246-252&issn=0361526X&au=Brown,%20Daniel&genre=article&ID=doi:10.1080%2F0361526X.2021.2008581
```

As before, if you look closely at those links, and you will see that the article's **metadata** is embedded in the URL.
Among other things, you can see the publication title, the article title, the author's name, the DOI, and more.

> Reminder, **metadata** is data that provides information about other data, such as an article title, author, and DOI.
> In our examples, citation metadata provides a way to retrieve the correct resource.

Why does this work?
In these examples, the OpenURL request is transmitted using an [HTTP][http_wiki] [GET HTTP Request][gethttp] (as opposed to a [POST HTTP Request][post_http]).
A GET HTTP Request is a way that web browsers request information or data from a server or resource and do so via data encoded in the URL.
In this case *InfoKat Discovery* uses the metadata embedded in the URLs.

This is primarily the work of an **OpenURL** link resolver, which is a system that helps connect users to the full text of articles by using metadata from their citation information.
The link resolver is designed to provide access to a *target* despite the *source* (where the item was found).

OpenURL is a technical solution to the appropriate-copy problem (i.e., which copy to provide);
It solves the appropriate-copy/context-sensitive linking problem that paywalled and distributed library holdings create
(Van de Sompel & Hochstenbach, 1999a;  Van de Sompel & Hochstenbach, 1999b;  Van de Sompel & Hochstenbach, 1999c; National Information Standards Organization, 2010). 
Ergo, paywalls and multiple discovery platforms complicate access, and link resolvers help reduce or eliminate the complications.
In short, link resolvers are designed to help users of electronic resources access a source in a library's collection based on a citation or record that the user discovered in a search result,
an article's list of references, or wherever else the link resolver might show up.

### *Google Scholar* Example

Now that we have explored the overall topic, let's examine a particular workflow.
Consider a search scenario in *Google Scholar*.
To start, users can affiliate themselves with a specific library through Google Scholar's settings.
(Users do not have to affiliate with a library's subscribed database if they access that subscribed database through the library.)
Once the affiliation has been configured, *Google Scholar* can send information about a result to the institution's OpenURL-compatible link resolver.
The resolver then uses the library's holdings and service information (**knowledge base**) to determine what access options are available.

It works like this:

* **Metadata extraction**: *Google Scholar* extracts the article's (or other content) metadata, which includes details such as the title, author, DOI, and publication year, from its database.
* **Administrative metadata**: Additional metadata about the institution, such as an institutional ID number, is added to this information (see [administrative metadata][admin_meta_saa]).
* **Resolution and presentation**: The link resolver uses the metadata and the library's holdings and service information to determine which services are available. Users are then presented with appropriate **target options** for retrieving the article, or in some cases, taken directly to the full text (e.g., if only one target option exists in their library's collections).

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
> Now when you search in *Google Scholar*, you should see **View Now @ UK** links if your affiliation is University of Kentucky.
> The link should be next to search results in your affiliation's collections.

> See [Link Resolver 101][mcdonald2004] for an early history on this technology (McDonald & Van de Velde, 2004).
> Since OpenURL is a [NISO Standard](https://www.niso.org/publications/z3988-2004-r2010), McDonald & Van de Velde's article sheds light on that path to (NISO) standardization.
> Also, [Alma provides Google Scholar][googlescholaralma] documentation that is useful to read through.
> See also [Google Scholar's][gslibrary] documentation.

Consider conducting a basic keyword search in *Google Scholar* using the term `"electronic resources"`.
If you have configured an affiliation with a specific library in *Google Scholar*, you should see a **View Now @ [institution]** link next to search results for items in your library's collections.
Copying that link will let us investigate it more closely.
For example, here is a **View Now @** link from *Google Scholar*:

```
https://scholar.google.com/scholar?output=instlink&q=info:Sj_9YmD0RWYJ:scholar.google.com/&hl=en&as_sdt=0,18&scillfp=7363278596044209265&oi=lle
```

This is a remarkably different URL than the examples from *EBSCOhost* and *ProQuest*.
It is not an OpenURL, and to see that, we can decompose it into the following:

```
https://scholar.google.com/scholar
?
output=instlink
&
q=info:Sj_9YmD0RWYJ:scholar.google.com/
&
hl=en
&
as_sdt=0,18
&
scillfp=7363278596044209265
&
oi=lle
```

Note that this URL does not contain the article's metadata.
Rather there are two other important parts.
The `output=instlink` part tells *Google Scholar* that this is an institutional link, which makes sense because I clicked on the **View Now @** button rather than *Google Scholar's* main link in the item's listing.
Second, the `q=info:Sj_9YmD0RWYJ:scholar.google.com/` part identifies this particular item in *Google Scholar's* system.
(*Google Scholar* has its own indexing system and method of identifying items it has indexed.)

If I am quick enough, I can capture the OpenURL link when I click the *Google Scholar* link.
That looks like this:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY&volume=22&date=2005&aulast=Dadzie&issue=5&issn=1065-0741&spage=290&id=doi:10.1108%2F10650740510632208&auinit=PS&title=CWIS&atitle=Electronic%20resources:%20access%20and%20usage%20at%20Ashesi%20University%20College&sid=google
```

And when decomposing the URL, we can see that *Google Scholar* constructs a recognizable OpenURL that it submits to my university's link resolver:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl
?
institution=01SAA_UKY
&
vid=01SAA_UKY:UKY
&
volume=22
&
date=2005
&
aulast=Dadzie
&
issue=5
&
issn=1065-0741
&
spage=290
&
id=doi:10.1108%2F10650740510632208
&
auinit=PS
&
title=CWIS
&
atitle=Electronic%20resources:%20access%20and%20usage%20at%20Ashesi%20University%20College
&
sid=google
```

And finally, we get the end URL, which is the target URL (i.e., the item itself):

```
https://www.emerald.com/ijilt/article/22/5/290/100225/Electronic-resources-access-and-usage-at-Ashesi
```

### In Case of Interlibrary Loan

We can see another instance of this within the discovery system, *Primo*, itself.
Let's say that in my university's version of *Primo*, I search for the phrase `electronic resources` and filter by *WorldCat* options.
By filtering for *WorldCat* options, I'm more likely to retrieve records that are not in my library's collections.

The first option is a work titled "Electronic Resources. Selection and bibliographic control."
Since this is not available through my library, I would have to request the item through interlibrary loan.
The OpenURL is able to know that the target is will be an interlibrary loan request (e.g., ILLIAD).

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

## Changes in OpenURL

Until recently, discovery platforms (including Primo) leaned heavily on **OpenURL**, which we know is a standards-based way of passing citation metadata (author, title, DOI, etc.) into a link resolver.
This openness means links were portable: any database could pass metadata, and the resolver decided which full-text copy to serve.
 
However, *Primo VE* uses record-ID-based deep links for links to records within Primo.
These differ from OpenURLs because record-ID-based deep links identify records within a particular system
rather than describe a resource through bibliographic metadata so that a link resolver can determine the appropriate services.
These links jump straight to a record in *Primo VE* rather than carrying metadata through an OpenURL.
The OpenURL resolver still exists, to support context-sensitive linking from external sources (e.g., *Google Scholar*, *EBSCOhost*, etc.),  but
users who copy links directly from Primo's interface encounter closed, ID-based URLs rather than portable, metadata-driven OpenURLs.

The following is an example of a *Primo VE* record-based link:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/fulldisplay?
docid=alma9941323157502636&
context=L&
vid=01SAA_UKY:UKY&
lang=en&
search_scope=MyInst_and_CI&
adaptor=Local%20Search%20Engine&
tab=Everything&
query=any%2Ccontains%2Celectronic%20resources&
offset=0
```

See: [Primo VE Overview][primo_ve] and [Primo VE Deep Links][primo_ve_deep_links].

## Working with OpenURL Link Resolvers

Now that we have a basic understanding of how OpenURL and link resolver work, we can now understand various issues with link resolvers.
For example, [Kasprowski (2012)][kasprowski2012], [Johnson et al. (2015)][johnson2015], and [Chisari et al. (2017)][chisare2017]
discuss link resolver technology, migration to new link resolver services, and methods to evaluate link resolver technology from both the systems and a user's perspective.
It may not be necessary to master OpenURL syntax or the intricacies of link resolver URL formatting, as demonstrated here (and in Appendices A and B),
but it is beneficial to acquire a basic understanding of how these URLs function in this process.

Let me re-emphasize that the key way that link resolvers work is by embedding citation metadata within the link resolver URL, including administrative metadata.
For this to work, it means we need high quality metadata for our records, as our readings note.
If we receive a report, perhaps reported by a library patron, about a broken link in this process, the cause could be incorrect or outdated metadata.
However, as reported by [Montavon-Green (2023)][montavon2023], other issues that cause link resolver errors include:
titles are not indexed even though the library provides access to them; titles are indexed but patrons are directed to a paywall; glitches in some technology such as a vendor platform; and usability issues.
Knowing the parts of this process aids us in deciphering possible errors that exist when the technology breaks.

## Appendix A

We can build things once we understand how OpenURL and link resolvers work.
In the following, I show how I augmented the [Zotero][zotero] bibliographic reference manager to connect to my library using OpenURL.

### How I Enhanced Zotero by Hacking OpenURL

Since OpenURL compatible link resolver technology is partly based on [query strings][querystring], we can glean all sorts of information by examining these URLs:
the query string component contains the metadata for the source and the base component contains the vendor, institutional information, and the URL type.
When I worked on this section, I was able to learn that *Primo/Alma* uses two URL types to request resources: a search URL and an OpenURL.
We can see this in the following base URLs.
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

[Zotero][zotero] has a [locate menu][locateMenu], which uses OpenURL resolvers to look up items in a library.
By default, Zotero uses *WorldCat*, but it can use a specific institution's OpenURL resolver.
When I investigated whether my institution was listed in the Zotero locate menu, I found that it was not listed on Zotero's page of [OpenURL resolvers][openurlResolvers].

At the time, I didn't know what my institution's exact OpenURL was, but I was able to figure it out by comparing the syntax and values from other Primo URLs listed on Zotero's page of OpenURL resolvers.
By comparing these OpenURLs, I was able to derive my institution's specific OpenURL (base component plus institutional info), which is:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY
```

I added that to Zotero, and it worked.
Then I posted the OpenURL info to Zotero's forum, and they added it to their OpenURL resolver page.
If others are curious about how to add this info to Zotero, [another library][sacredheart] has created a video on this.
The directions cover adding a specific OpenURL to Zotero and on how to use Zotero's Library Lookup functionality.

## Appendix B

Even though the URLs listed in this section are incredibily informative, they are complicated and difficult to read.
Fortunately, there are applications like [`trurl`][trurl] that we can use to parse these and othe GET-request URLs.
The following `trurl` command decomposes the Primo URL into its major components.
The output is sent to the [`jq`][jq] (JSON processor) command to clean it up.

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

Example command on *Google Scholar* URL:

```
trurl "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C18&q=electronic+resource+management&oq=&inst=644821257881216646" --json --sort-query
```

Output: 

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

See [SerpApi's documentation on Google Scholar][gs_api] for an explanation of some of the parameters used in Google Scholar.

## References and Suggested Readings

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

McDonald, J., & Van de Velde, E. F. (2004, April 1).
The lure of linking. *Library Journal*. Library Journal Archive Content.
[https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/][mcdonald2004]

Montavon-Green, J. (2023).
Link resolver survival skills: Using a team-based approach to diagnosing and fixing link resolver problems
Serials Spoken Here.
*Serials Review, 49*(3–4), 116–124.
[https://doi.org/10.1080/00987913.2023.2174400][montavon2023]

National Information Standards Organization. (2010).
ANSI/NISO Z39.88-2004 (R2010), The OpenURL Framework for Context-Sensitive Services. *NISO*.
[https://doi.org/10.3789/ansi.niso.z39.88-2004R2010][openurl_niso]

Van De Sompel, H., & Hochstenbach, P. (1999a).
Reference linking in a hybrid library environment: Part 1: frameworks for linking.
*D-Lib Magazine, 5*(4).
[https://doi.org/10.1045/april99-van_de_sompel-pt1][sompel_part1]

Van De Sompel, H., & Hochstenbach, P. (1999b).
Reference linking in a hybrid library environment: Part 2: SFX, a generic linking solution.
*D-Lib Magazine, 5*(4).
[https://doi.org/10.1045/april99-van_de_sompel-pt2][sompel_part2]

Van De Sompel, H., & Hochstenbach, P. (1999c).
Reference linking in a hybrid library environment: Part 3: generalizing the SFX solution in the “SFX@ghent & SFX@LANL” experiment.
*D-Lib Magazine, 5*(10).
[https://doi.org/10.1045/october99-van_de_sompel][sompel_part3]

[admin_meta_saa]:https://dictionary.archivists.org/entry/administrative-metadata.html
[chisare2017]:https://doi.org/10.1080/1941126X.2017.1304765
[crossref]:https://search.crossref.org/
[gethttp]:https://www.w3schools.com/tags/ref_httpmethods.asp
[googlescholaralma]:https://knowledge.exlibrisgroup.com/Alma/Product_Documentation/010Alma_Online_Help_(English)/090Integrations_with_External_Systems/030Resource_Management/150Publishing_Electronic_Holdings_to_Google_Scholar
[googleScholar]:https://scholar.google.com
[gs_api]:https://serpapi.com/google-scholar-api
[gslibrary]:https://scholar.google.com/intl/en/scholar/libraries.html
[http_wiki]:https://en.wikipedia.org/wiki/HTTP
[johnson2015]:https://doi.org/10.1080/1941126X.2015.999519
[jq]:https://jqlang.org/
[kasprowski2012]:https://doi.org/10.1080/0361526X.2012.652480
[locateMenu]:https://www.zotero.org/support/locate
[mcdonald2004]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/
[montavon2023]:https://doi.org/10.1080/00987913.2023.2174400
[oa_wiki]:https://en.wikipedia.org/wiki/Open_access
[open_alex]:https://openalex.org/
[openathens]:https://www.openathens.net/
[openurl_niso]:https://www.niso.org/publications/z3988-2004-r2010
[openurlResolvers]:https://www.zotero.org/support/locate/openurl_resolvers
[openurl_wiki]:https://en.wikipedia.org/wiki/OpenURL
[percentencoding]:https://en.wikipedia.org/wiki/Percent-encoding
[post_http]:https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST
[primo_ve_deep_links]:https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/120Other_Configurations/Configuring_Redirection_for_Primo_VE_Deep_Links
[primo_ve]:https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/010Getting_Started_with_Primo_VE/005Primo_VE_Overview
[querystring]:https://en.wikipedia.org/wiki/Query_string
[sacredheart]:https://library.sacredheart.edu/zotero/advanced/usingLibraryLookup
[semantic_scholar]:https://www.semanticscholar.org/
[serials_librarian]:https://www.tandfonline.com/journals/wser20
[sompel_part1]:https://doi.org/10.1045/april99-van_de_sompel-pt1
[sompel_part2]:https://doi.org/10.1045/april99-van_de_sompel-pt2
[sompel_part3]:https://doi.org/10.1045/october99-van_de_sompel
[trurl]:https://curl.se/trurl/
[ulrichs_uky]:https://libguides.uky.edu/2060
[unicode_wiki]:https://en.wikipedia.org/wiki/Unicode
[utf8]:https://www.w3schools.com/tags/ref_urlencode.asp
[zotero]:https://www.zotero.org/
[uknowledge]:https://uknowledge.uky.edu/
[bioRxiv]:https://www.biorxiv.org/
[arXiv]:https://arxiv.org/
[jisc_oa]:https://openpolicyfinder.jisc.ac.uk/
