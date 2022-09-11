# Interoperability

## Introduction

In this section we cover what it means for technology
to be interoperable using OpenURL link resolvers.

## Problem

We take it for granted that,
on the open web,
we can seamlessly follow links to
websites and webpages,
or do so without too much fuss.
It gets more complicated
when we want access to works that are behind paywalls,
despite where such works have been found:
search engines, bibliographic databases,
OPACs, or discovery services.
In such cases,
direct links to such sources will not always work.

The complication is that,
when a library subscribes to a
journal or a magazine,
access to that journal or magazine
is provided through
various services and not necessarily through the
publisher's default site.
Also, libraries provide multiple discovery points and
multiple ways to access the same works,
such as through bibliographic databases
with overlapping scopes.
Bibliographic databases can tell
us that an item exists when we search for it,
but a library may not subscribe to the publication
or the item might be in the stacks,
stored off site or at another library altogether.
All these problems,
in conjunction with the paywalled problem,
which necessitates additional layers,
like proxy servers that function to authenticate
library users,
complicate access.

Let's consider an example.
The journal *Serials Librarian* is published
by *Taylor &amp; Francis Online* / *Routledge*, and
has the following site as its homepage:

[https://www.tandfonline.com/journals/wser20](https://www.tandfonline.com/journals/wser20)

The journal is indexed in *EBSCOhost*'s
[Library, Information Science & Technology Abstracts][lista]
(LISTA) database and in *ProQuest*'s
[Social Science Premium Collection][sspc] (SSPC) database,
among other places
(e.g., it can also be found in *Google Scholar*,
*Google Search*, a library's discovery platform,
and more).
This means that an article like the following
can show up based on a query on any of the above platforms,
even if none of these search or discovery platforms provide
full text access to the article:

> Brown, D. (2021). "Through a glass, darkly:: Lessons learned
> starting over as an electronic resources librarian. *The
> Serials Librarian, 81*(3–4), 246–252.
> [https://doi.org/10.1080/0361526X.2021.2008581][brown2021]

One way to know if our library provides access
to the above source and others like it is 
through a link resolver.
We see UK's link resolver in action whenever
we see a **View Now @ UK** button or link.
When we click on that button or link in
someplace like LISTA or SSPC,
we trigger the database's role in the link resolver
for that article,
and that routes us through
the library's discovery service.
In *LISTA*, that link looks like this:

```
https://web-p-ebscohost-com.ezproxy.uky.edu/ehost/SmartLink/OpenIlsLink?sid=9508afc3-4f38-4b9d-b680-71981313e0dd@redis&vid=5&sl=smartlink&st=ilslink_new&sv=sdbn%253Dlxh%2526pbt%253DAcademic%2520Journal%2526issn%253D0361526X%2526ttl%253DSerials%252520Librarian%2526stp%253DC%2526asi%253DY%2526ldc%253D%2526lna%253DAlma%252520Linking%2526lca%253DfullText%2526lo_an%253D156075536&su=https%3A%2F%2Fsaalck-uky.primo.exlibrisgroup.com%2Fopenurl%2F01SAA_UKY%2F01SAA_UKY%3AUKY%3FID%3Ddoi%3A10.1080%252F0361526X.2021.2008581%26genre%3Darticle%26atitle%3D%2522Through%2520a%2520Glass%252C%2520Darkly%2522%253A%2520Lessons%2520Learned%2520Starting%2520over%2520as%2520an%2520Electronic%2520Resources%2520Librarian.%26title%3DSerials%20Librarian%26issn%3D0361526X%26isbn%3D%26volume%3D81%26issue%3D3%252F4%26date%3D20220701%26au%3DBrown%2C%20Daniel%26spage%3D246%26pages%3D246-252%26sid%3DEBSCO%3ALibrary%252C%2520Information%2520Science%2520%2526%2520Technology%2520Abstracts%3A156075536
```

In *Social Science Premium Collection*,
the link looks like this:

```
https://www.proquest.com/docview.accesstofulltextlinks.detailsorabstractoutboundlinks.externallink:externallink/https:$2f$2fsaalck-uky.primo.exlibrisgroup.com$2fopenurl$2f01SAA_UKY$2f01SAA_UKY:UKY$3furl_ver$3dZ39.88-2004$26rft_val_fmt$3dinfo:ofi$2ffmt:kev:mtx:journal$26genre$3darticle$26sid$3dProQ:ProQ$253Alibraryscience$26atitle$3d$2526ldquo$253BThrough$2ba$2bGlass$252C$2bDarkly$2526rdquo$253B$253A$2bLessons$2bLearned$2bStarting$2bover$2bas$2ban$2bElectronic$2bResources$2bLibrarian$26title$3dThe$2bSerials$2bLibrarian$26issn$3d0361526X$26date$3d2021-11-01$26volume$3d81$26issue$3d3-4$26spage$3d246$26au$3dBrown$252C$2bDaniel$26isbn$3d$26jtitle$3dThe$2bSerials$2bLibrarian$26btitle$3d$26rft_id$3dinfo:eric$2f$26rft_id$3dinfo:doi$2f10.1080$252F0361526X.2021.2008581/MSTAR_2645781371/LinkResolver/1193?t:ac=2645781371/Record/D137B205B8D14795PQ/1
```

Clicking on either of the above in their
respective databases will send us to *Primo*,
UK Library's discovery layer.

If we had clicked on *EBSCOhost*'s View Now link,
the *Primo* link will result in the following:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY&date=20220701&issue=3%2F4&isbn=&spage=246&title=Serials%20Librarian&atitle=%22Through%20a%20Glass,%20Darkly%22:%20Lessons%20Learned%20Starting%20over%20as%20an%20Electronic%20Resources%20Librarian.&sid=EBSCO:Library,%20Information%20Science%20%26%20Technology%20Abstracts:156075536&volume=81&pages=246-252&issn=0361526X&au=Brown,%20Daniel&genre=article&ID=doi:10.1080%2F0361526X.2021.2008581
```

If we look closely at those links
(scroll to the right to view their entirety),
you can see that the article's **metadata** is
embedded in the URLs.
Among other things, you can see the
publication title, the article title,
the author's name, the DOI, and more.

That metadata is used to trigger a search
query in the library's discovery platform
(at UK, that's *InfoKat Discovery* by *Primo*).
It specifically initiates a [GET HTTP Request][gethttp],
which is designed to request data from a resource/server,
in this case *InfoKat Discovery*, using
the metadata embedded in the URLs
as seen above.

This is the work of an OpenURL link resolver,
among other technologies,
which are designed to provide access
to a *target* despite their *source* by
initiating queries in an OPAC or discovery
platform using the metadata embedded in a URL.

This is a technical solution to the paywall problem
that is designed to help users of
electronic resources access a source in a
library's collection based on a citation/record
discovered in a search result,
an article's list of references,
or wherever else the link resolver might show up.
It is meant to work for all items in a library's collection,
including print items,
since print items have records in the catalog
or discovery service.

## Use Cases
 
### *Google Scholar* Example

Let's imagine a search in *Google Scholar*,
and that as a result of this search,
we identify a paywalled article
that we wish to retrieve from the library.
If we have made *Google Scholar* aware that
we are affiliated with a specific library,
by that affiliation *Google Scholar* becomes
aware of a library's collections
(through a knowledge base).
Then *Google Scholar* will use a library's link
resolver service to retrieve a target
from a library's collections using the following process:

1. The metadata about the article will be extracted from
   *Google Scholar* (aka, the *source*).
1. More metadata will be added about the institution
   (administrative metadata, like an institutional ID
   number).
1. The metadata is converted into a URL query that queries
   the library's collections in the discovery service, and
1. The user is then presented with *target* options (or
   taken directly to the work) for retrieving the article.
    - the options may include full text access from various
      and possibly multiple vendors or publishers,
      information about the physical location (e.g., on the
      shelves) if it exists there, or options to request the
      work through interlibrary loan. Ideally, it will lead
      the user directly to the full text.

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
> you should see **View Now @ UK** links
> (if your affiliation is University of Kentucky)
> next to search results that your affiliation has
> in its collections.

> See [Link Resolver 101][lr101] for additional details and
> this historical piece on link resolvers [(McDonald & Van
> de Velde, 2004)][mcdonald2004].

Consider a basic keyword search in
*Google Scholar* for the term ``electronic resources``.
One of the first items listed in the
results page is an article titled
"Electronic resources: access and usage
at Ashesi University College."
If we've connected our library to *Google Scholar*,
then we should see a **View Now @ UK** link to the
right of our search result list.
In the following OpenURL,
we can see the article's metadata and
also that *google* is the *source*
(just as we could see that
*ebscohost* and *proquest* were the
sources in the URLs above).

```
https://saalck-uky.primo.exlibrisgroup.com/openurl/01SAA_UKY/01SAA_UKY:UKY?sid=google&auinit=PS&aulast=Dadzie&atitle=Electronic+resources:+access+and+usage+at+Ashesi+University+College&id=doi:10.1108/10650740510632208
```

Full text for that article is
provided by *Emerald eJournals Premier*,
and *Emerald* is the original publisher
of this journal and provides the 
original view of the article.
That means that *Primo* next hands off our query
to UK Library's proxy service,
**EZProxy**,
which asks us to authenticate ourselves
with our university account login information,
and then takes us to a copy of that full text
from the provider.
The article is also available as full text through
two *ProQuest* databases, but
Emerald's view takes precedence since it's
the original publisher.

If other resources provided access,
like the *EBSCOhost* and *ProQuest* databases,
and not the original publisher,
like *Emerald*,
we would stop on *Primo* and
be offered to select which database we
would like to use to view the full text.

In our case,
since we only have one option,
the *Primo* to EZProxy to the *Emerald* full text view
transfers happen quickly.

## Dissecting an OpenURL

Let's take a closer look at the *Primo* URL.
By looking at its components,
we see that it's an OpenURL link,
and we can see the fields and values and
identify the metadata.
The percent signs and numbers in the title field use
[Percent-encoding][percentencoding].
Percent-encoding is a process used to 
encode characters that are URL unfriendly,
like empty spaces between words,
into characters that can be parsed.
See [this page][utf8] for a table of
UTF-8 percent-encodings and the characters they match.
I have inserted newlines into the *Primo* link below
to enable readability:

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

The link resolver technology translates the metadata
embedded in the above link as needed for
the appropriate service.
The **institution**, **vid**, and **sid** fields
are administrative metadata that identify 
the source information.
The key fields used to retrieve the record
for this source are the:

- **aulast** for author's last name
- **id** for the DOI
- **auinit** for the author's first two initials
- **atitle** for the article title

### In Case of Interlibrary Loan

We can see another instance of this within *Primo* itself.
Here I search for the phrase ``electronic resources``
and filter by *WorldCat* options
from the drop down box to the right of the search box.
By filtering for *WorldCat* options,
I'm more likely to retrieve records that are
not in UK Library's collections.

The first option is a work titled
**Electronic Resources.
Selection and bibliographic control.**
Since this is not available via UK Libraries,
I would have to request the item
through interlibrary loan.
When I do that, 
the link resolver triggers
[ILLiad][illiadopenurl],
which is used for interlibrary loan.
Note how the OpenURL looks much different here.
Essentially, the OpenURL is contextual, and
its context reflects the service being used
(i.e., *EBSCOhost*, *ProQuest*, *Google Scholar*,
*Primo*, *Illiad*, etc.) which determines
the metadata elements in the URL.
Note that some elements are empty
(e.g., **rft.date=&** is an empty value for the date field 
versus **rft.genre=book&**, which holds the value **book**
for the genre field).

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

## Readings

Our readings this week by
[Kasprowski (2012)][kasprowski2012],
[Johnson et al. (2015)][johnson2015], and
by [Chisari et al. (2017)][chisare2017]
discuss link resolver technology,
migration to new link resolver services, and
methods to evaluate link resolver technology
from both the systems and a user's perspective.
It may not be necessary to learn how to hack
your way through the OpenURL syntax,
as I have above (or below: See Appendix A),
or other aspects of link resolver URL formatting,
but it is a good idea to acquire a basic
understanding of how the URLs work in this process.

Let me re-emphasize that the key way that
link resolvers work is by embedding citation metadata
within the link resolver URL,
including administrative metadata.
This is another reason to have high quality
metadata for our records,
as our readings note.
By implication, if we find,
perhaps by an email from a library patron,
that a link has broken in this process,
it might be that the metadata is incorrect or
has changed in some important way.
Knowing the parts of this process aids us in
deciphering possible errors that exist when the
technology breaks.

For this week, see the *ExLibres Alma*
link resolver documentation,
which is the link resolver product used by UK Libraries.
Let's discuss this documentation in the forum.
I want you to find and explain other
instances of link resolvers.
Be sure to provide links to these examples and
articulate ways the technology can be evaluated.

**Documentation to read and discuss:**

[Link Resolver, Usage][lrusage]

## Additional information

- [URL syntax components][urlsyntax]
- [URL Encode / Decode Percent Encoding][urlencode]
- [How Google Scholar works with libraries][howgs]
- [Surface your materials in Google Scholar (OCLC)][worldshare]

## Appendix A

### How I Enhanced Zotero by Hacking OpenURL

Since OpenURL compatible link resolver technology
is partly based on
[query strings](https://en.wikipedia.org/wiki/Query_string),
as we have seen,
we can glean all sorts of information
by examining these URLs:
the query string component that contains
the metadata for the source but
also the base component that
contains the vendor and institutional information
and also the URL type.
When I worked on this section,
I was able to learn that *Primo/Alma*
uses two URL types to request resources:
a search URL and an OpenURL.
We can see this the URLs.
The base search URL looks like this:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/search?
```

The base OpenURL differs just a bit (see the end of the URL):

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?
```

The base search URL appears when
searching the university's discovery service.
However, the OpenURL only appears when needed and
during transit between the source and
before reaching the target:
e.g., after clicking on a **View Now @ UK** link and
before being redirected to the full text version.
I copied my institution's
specific OpenURL when I clicked on a
**View Now @ UK** link and before it redirected
to the [EZproxy][ezproxy] page.

My students often identify great problems to solve
or are the source of great ideas.
In a previous semester,
one of my students in my
electronic resource management class
noticed that [Zotero][zotero] has a
[locate menu][locateMenu]
that uses OpenURL resolvers to look up items in a library.
By default, Zotero uses *WorldCat*, but
it can use a specific institution's OpenURL resolver.
I had completely forgotten about this.
When I investigated whether my institution was listed
in the Zotero locate menu,
I found that it was not nor was it
listed on Zotero's page of
[OpenURL resolvers][openurlResolvers].

At the time,
I didn't know what my institution's exact OpenURL was, but
I was able to figure it out by comparing
the syntax and values from other Primo URLs listed on
Zotero's page of OpenURL resolvers.
By comparing these OpenURLs,
I was able to derive my institution's specific OpenURL
(base component plus institutional info), which is:

```
https://saalck-uky.primo.exlibrisgroup.com/discovery/openurl?institution=01SAA_UKY&vid=01SAA_UKY:UKY
```

I added that to Zotero, and it worked, and
then I posted the OpenURL info to Zotero's forum, and
they've added it to their OpenURL resolver page.
If others are curious about how to add this info to Zotero,
[another library][sacredheart]
has created a video on this.
The directions cover adding a specific OpenURL to Zotero
and on how to use Zotero's Library Lookup functionality.

## Appendix B

### A Basic URL

I mentioned query strings above.
Theses are a part of a URL that
include instructions to query
engines, database, or websites
(like *Wikipedia*).
The parameters (i.e., search terms)
are part of a query string, too.
It's also important to 
understand the base part of a URL (link) because
the **link** in link resolver is the
part of the whole process.
A URL for an  article can looks like this: 

```
https://www.emerald.com/insight/content/doi/10.1108/10650740510632208/full/html
```

This URL contains the following components:

- https:// : indicates the secure hypertext transfer
  protocol (HTTP)
- www      : indicates the subdomain
- emerald  : indicates the second level domain name
- .com     : indicates the top level domain

Under a standard configuration,
the rest of the URL indicates directory (or folder)
location information on the *emerald.com* server.
The following suggests
that the article is seven directories (or folders) deep on
the *emerald.com* server:

- /insight/content/doi/10.1108/10650740510632208/full/html

The DOI (digital object identifier)
for this article is part of the above URL and
is specifically
``10.1108/10650740510632208``.
The DOI is composed of a [prefix and a suffix][doinumbering].
The prefix includes the following elements:

- 10 : this is the directory indicator
- 1108 : the registrant code for this specific journal

The suffix refers to the following element:

- 10650740510632208 : a character string (in this case, of
  numbers) that refers to the article. This string is
  created by the registrant

The DOI itself can be used to create a permanent URL
for the above work be adding a **https://doi.org/**
to the beginning:

```
https://doi.org/10.1108/10650740510632208
```

## Readings / References

Chisare, C., Fagan, J. C., Gaines, D., & Trocchia, M.
(2017). Selecting link resolver and knowledge base software:
Implications of interoperability. *Journal of Electronic
Resources Librarianship, 29*(2), 93–106.
[https://doi.org/10.1080/1941126X.2017.1304765][chisare2017]

Johnson, M., Leonard, A., & Wiswell, J. (2015). Deciding to
change OpenURL link resolvers. *Journal of Electronic
Resources Librarianship, 27*(1), 10–25.
[https://doi.org/10.1080/1941126X.2015.999519][johnson2015]

Kasprowski, R. (2012). NISO’s IOTA initiative: Measuring the
quality of openurl links. *The Serials Librarian, 62*(1–4),
95–102.
[https://doi.org/10.1080/0361526X.2012.652480][kasprowski2012]

## Additional References

McDonald, J., & Van de Velde, E. F. (2004, April 1). The
lure of linking. *Library Journal*. Library Journal Archive
Content.
[https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/][mcdonald2004]

[assdt]:https://serpapi.com/google-scholar-courts
[brown2021]:https://doi.org/10.1080/0361526X.2021.2008581
[chisare2017]:https://doi.org/10.1080/1941126X.2017.1304765
[doinumbering]:https://www.doi.org/doi_handbook/2_Numbering.html
[ezproxy]:https://www.oclc.org/en/ezproxy.html
[gethttp]:https://www.w3schools.com/tags/ref_httpmethods.asp
[googlescholaralma]:https://knowledge.exlibrisgroup.com/Alma/Product_Documentation/010Alma_Online_Help_(English)/090Integrations_with_External_Systems/030Resource_Management/150Publishing_Electronic_Holdings_to_Google_Scholar
[googleScholar]:https://scholar.google.com
[gslibrary]:https://scholar.google.com/intl/en/scholar/libraries.html
[howgs]:https://scholar.google.com/intl/en/scholar/libraries.html
[illiadopenurl]:https://support.atlas-sys.com/hc/en-us/articles/360011910073-OpenURL-Configuration
[johnson2015]:https://doi.org/10.1080/1941126X.2015.999519
[kasprowski2012]:https://doi.org/10.1080/0361526X.2012.652480
[lista]:https://libguides.uky.edu/803
[locateMenu]:https://www.zotero.org/support/locate
[lr101]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/#LinkResolver
[lrusage]:https://knowledge.exlibrisgroup.com/Alma/Product_Materials/050Alma_FAQs/E-Resource_Management/Link_Resolver%2C_Usage
[mcdonald2004]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/
[openurlResolvers]:https://www.zotero.org/support/locate/openurl_resolvers
[percentencoding]:https://en.wikipedia.org/wiki/Percent-encoding
[querystring]:https://en.wikipedia.org/wiki/Query_string
[sacredheart]:https://library.sacredheart.edu/zotero/advanced/usingLibraryLookup
[sspc]:https://libguides.uky.edu/3355
[urlencode]:https://www.url-encode-decode.com/
[urlsyntax]:https://tools.ietf.org/html/rfc3986#page-16
[utf8]:https://www.w3schools.com/tags/ref_urlencode.asp
[worldshare]:https://help.oclc.org/Metadata_Services/WorldShare_Collection_Manager/Choose_your_Collection_Manager_workflow/Knowledge_base_collections/Use_collection_data_with_other_services/Surface_your_materials_in_Google_Scholar
[zotero]:https://www.zotero.org/
