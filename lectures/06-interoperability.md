# Lecture 6: Interoperability

This week we cover interoperability and link resolvers. Link resolvers offer
a technical solution to help users of electronic resources access the full text
in a library's collection based on a discovered citation. It is meant to work
for all items in a library's collection. Its reason for existence is for items
that are paywalled or for items that are inaccessible via the open web for some
reason. Link resolvers can be used to acquire access through some other means,
like interlibrary loan. Though its use is motivated by electronic resources, it
can identify resources that are located in the library stacks.

Let's imagine a search in *Google Scholar*, let's call this the *source*, and
as a result of this search, we have identified an article that we wish to
retrieve. If you have made *Google Scholar* aware that you are affiliated with
a specific library and if the library uses a link resolver service, then:

1. The metadata about the article will be extracted from the source, in this
   case, that's *Google Scholar*, and this will be added to 
2. the metadata about the institution (administrative metadata, like an
   institutional ID number).
3. The metadata is converted into a URL query that queries the library's
   collections, and
4. the user is then presented with *target* options (or taken directly to the
   work) for retrieving the article, and the options may include full text
   access from various and possibly multiple vendors or publishers, information
   about the physical location (e.g., on the shelves) if it exists, or options
   to request the work through interlibrary loan. Ideally, it will lead the
   user directly to the full text.

[ Show how to make *Google Scholar* aware of your affiliation ]

See [Link Resolver 101][lr_101] for additional details and this historical piece on
[link resolvers][link_resolv].

Consider a basic keyword search in *Google Scholar* for the term ``knowledge
management``. One of the first items listed in the results page is to an
article titled "A systems thinking framework for knowledge management." If
we've gone to *Google Scholar's* settings, and added your library to the
**Library Links** list, then we should see a **View Now @ UK** link to the
right of your search result list. This indicates the likelihood, although there
could be an error, that the article is available through UK Libraries, in my
case, or another library in another person's case.

We can examine the URL for the **View Now @ UK** link by right clicking the URL
and decomposing it into its components. What we see here is what is called
a [query string][query_string]. A query string is a part of the URL that contains
(metadata) fields or parameters and values for those parameters, and it begins
after the letter *q* in the URL. Each additional parameter begins after each
ampersand. In the following query string, I start each newline with a new
parameter and end it with its value:

```
https://scholar.google.com/scholar?
output=instlink&
q=info:cGrF-EL6GzgJ:scholar.google.com/&
hl=en&
as_sdt=0,18&
scillfp=11205708406455066108&
oi=lle
```

According to a source that describes [Google Scholar's API][google_scholar_api], some of the
parameters above mean the following things:

- output: "Parameter defines the final output you want. It can be set to json
  (default) to get a structured JSON of the results, or html to get the raw
  html retrieved."
- q: "Parameter defines the query you want to search. You can also use helpers
  in your query such as: author:, or source:"
- hl: "Parameter defines the language to use for the Google search. It's
  a two-letter language code."
- as_sdt: "Parameter can be used either as a search type or a filter."

Due to those parameters, if we click on that **View Now @ UK** link, we are now
transported to UK's discovery service, *Primo*, by *Ex Libris*. This means that
the URL is the effective point of data exchange between Google Scholar and UK's
resources.

In Primo, if we investigate the new URL, we see that it's an OpenURL link and
we can see the fields and values and identify the metadata (I have decomposed
the URL for readability). The percent signs and numbers in the title field use
[Percent-encoding][percent_encoding], and they convert characters that are URL unfriendly,
like empty spaces between words, to something that URLs can handle and parse.
See [this page][utf_8] for a table of UTF-8 percent-encodings and the characters
they match:

```
https://saa-primo.hosted.exlibrisgroup.com/primo-explore/openurl?
sid=google&
auinit=B&
aulast=Rubenstein-Montano&
atitle=A%20systems%20thinking%20framework%20for%20knowledge%20management&
id=doi:10.1016%2FS0167-9236(00)00116-0&
title=Decision%20Support%20Systems&volume=31&
issue=1&
date=2001&
spage=5&
vid=UKY&
institution=UKY&
url_ctx_val=&
url_ctx_fmt=null&
isSerivcesPage=true
```

The resulting page is a menu of options to gain access to the work with respect
to what is in the library's collections. The link resolver technology works and
translates the metadata as needed for the appropriate service. If I click the
ILL link, then the URL becomes the following, and changes per the service used.
The metadata in the URL will to complete an ILL form (one line is decomposed
for readability):

```
https://lib.uky.edu/ILLiad/illiad.dll?
Action=10&
Form=30&
rft.genre=article&
rft.title=Decision+support+systems.&
rft.stitle=Decision+support+systems&
rft.atitle=A+systems+thinking+framework+for+knowledge+management&
rft.jtitle=Decision+support+systems.&
rft.au=Rubenstein-Montano%2C+B&
rft.date=2001&
rft.month=5&
rft.volume=31&
rft.issue=1&
rft.number=&
rft.spage=5&
rft.epage=16&
rft.edition=&
rft.issn=0167-9236&
rft.eissn=1873-5797&
rft.aulast=Rubenstein-Montano&
rft.aufirst=B&
rft.auinit=B&
rft.pub=Elsevier+Science+Publishers+BV+%28North+Holland%29&
rft.pubdate=1985-c1999.&
rft.pubyear=&
rft.publisher=Elsevier+Science+Publishers+BV+%28North+Holland%29&
rft.place=Amsterdam%2C+the+Netherlands+%3A&
rft.doi=10.1016%2FS0167-9236%2800%2900116-0&
rfe_dat=11804282&
rfr_id=google
```

This all works because the various publishers and vendors, and their associated
applications, have agreed to use this technology.

[ Demonstrate Network analyzer in Browser's Developer Tools ]

Let's consider an example a database that a library subscribes to, like
EBCOHost's *Academic Search Complete (ASC)*. I search for the term ``knowledge
management``. ASC is an abstracting and indexing, bibliographic database that
provides access to some full text articles on its own platform, whereas *Google
Scholar* links to full text, only if it is freely available on the web, or
links to them via a link resolver, if the *Google Scholar* user has set this up
in their settings, and the [library has also configured this on their
side][gs_library].

For those bibliographic records that are not available as full text in ASC, the
link resolver used by UK Libraries will display an option underneath the
bibliographic record in the ASC results or it will display after clicking the
full display option of the record. Here we see the link resolver in action in
the form of the **View Now @ UK** button. Clicking that will open the link
resolver menu, and we will see a list of options for accessing the full text of
the article. If the article is available full text in the library, like through
a different database. If not, there should be options for requesting the item
through interlibrary loan or options for accessing the item in the library's
physical collections if the library has the item in the stacks.

## Link Resolvers in Practice

Our readings this week by Kasprowski (2012) and by Chisari et al. (2017)
discuss link resolver technology and methods to evaluate link resolver
technology. It may not be necessary to learn how to hack your way through the
OpenURL syntax or other aspects of link resolver URL formatting, but it is
a good idea to acquire a basic understanding of how the URLs work in this
process.

Let me re-emphasize that the key way that link resolvers work is by embedding
citation metadata within the link resolver URL, including administrative
metadata. This is another reason to have high quality metadata for our records,
as our readings note. By implication, if we find, perhaps by an email from
a library patron, that a link has broken in this process, it might be that the
metadata is incorrect or has changed in some important way. Knowing the parts
of this process aids us in deciphering possible errors that exist when the technology breaks.

For this week, I'll provide a link to *ExLibres Alma* link resolver
documentation, which is the link resolver product used by UK Libraries. Let's
discuss this documentation in the forum. I want you to find and explain other
instances of link resolvers. Be sure to provide links to these examples and
articulate ways the technology can be evaluated.

**Documentation to read and discuss:**

[Link Resolver, Usage][lr_usage]

## Additional information

- [URL syntax components][url_syntax]
- [URL Encode / Decode Percent Encoding][url_encode] 
- [How Google Scholar works with libraries][how_gs]
- [Surface your materials in Google Scholar (OCLC)][worldshare]

[lr_101]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/#LinkResolver
[link_resolv]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/
[query_string]:https://en.wikipedia.org/wiki/Query_string
[percent_encoding]:https://en.wikipedia.org/wiki/Percent-encoding
[utf_8]:https://www.w3schools.com/tags/ref_urlencode.asp
[lr_usage]:https://knowledge.exlibrisgroup.com/Alma/Product_Materials/050Alma_FAQs/E-Resource_Management/Link_Resolver%2C_Usage
[url_syntax]:https://tools.ietf.org/html/rfc3986#page-16
[url_encode]:https://www.url-encode-decode.com/
[how_gs]:https://scholar.google.com/intl/en/scholar/libraries.html
[google_scholar_api]:https://serpapi.com/google-scholar-api
[gs_library]:https://scholar.google.com/intl/en/scholar/libraries.html
[worldshare]:https://help.oclc.org/Metadata_Services/WorldShare_Collection_Manager/Choose_your_Collection_Manager_workflow/Knowledge_base_collections/Use_collection_data_with_other_services/Surface_your_materials_in_Google_Scholar
