# Lecture 6: Interoperability

This week we cover interoperability and link resolvers.

Before this discussion gets complicated, remember that the fundamental idea of link resolvers is that link resolvers resolve links. They are a technical solution to help users of electronic resources access the full text in a library's collection based on a citation discovered in a search result, an article's list of references, or wherever else the link resolver might show up. It is meant to work for all items in a library's collection. Its reason for existence is for items that are pay-walled or for items that are inaccessible via the open web. Link resolvers are also used to acquire access through some other means, like inter-library loan, and though its use is motivated by electronic resources, it can identify resources that are located in the library stacks since such items will have a link (or a URL) in the online catalog or discovery system.

To get an idea of how they work, let's imagine a search in *Google Scholar*, and as a result of this search, we have identified a non-open-access article that we wish to retrieve from the library's electronic resources. If you have made *Google Scholar* aware that you are affiliated with a specific library and if the library uses a link resolver service, then:

1. The metadata about the article will be extracted from *Google Scholar*, or the *source*, and this will be added to
1. the metadata about the institution (administrative metadata, like an institutional ID number).
1. The metadata is converted into a URL query that queries the library's collections, and
1. the user is then presented with *target* options (or taken directly to the work) for retrieving the article, and the options may include full text access from various and possibly multiple vendors or publishers, information about the physical location (e.g., on the shelves) if it exists, or options to request the work through inter-library loan. Ideally, it will lead the user directly to the full text.

[ Show how to make *Google Scholar* aware of your affiliation ]

See [Link Resolver 101][lr_101] for additional details and this historical piece on [link resolvers][link_resolv].

Consider a basic keyword search in *Google Scholar* for the term ``electronic resources``. One of the first items listed in the results page is to an article titled "Electronic resources: access and usage at Ashesi University College." If we've gone to *Google Scholar's* settings, and added your library to the **Library Links** list, then we should see a **View Now @ UK** link to the right of your search result list. This indicates the likelihood, although there could be an error, that the article is available through UK Libraries, in my case, or another library in another person's case.

Let's compare the URL that *Google Scholar* provides to access the first result with the URL via the **View Now @ UK** link. We can examine both URLs by right-clicking them and decomposing them into their components.

The URL for the direct source is:

```
https://www.emerald.com/insight/content/doi/10.1108/10650740510632208/full/html
```

This URL contains the following components:

- https:// : indicates the secure hypertext protocol
- www      : indicates the subdomain
- emerald.com : indicates the first and second level domain names
- /insight/content/doi : the general location in the directory on the emerald.com server that contains this article
- /10.1108/10650740510632208 : also part of the location in the directory on emerald.com, but in this case, this is location is more unique to the journal and the article
- /full/html : more location about where the item is located on emerald.com

The DOI for this article is specifically ``10.1108/10650740510632208`` and is composed of a [prefix and suffix][doinumbering]. The prefix includes the following elements:

- 10 : this is the directory indicator
- 1108 : the registrant code for this specific journal

The suffix refers to the following element:

- 10650740510632208 : a character string (in this case, of numbers) that refers to the article. This string is created by the registrant

When we view the **View Now @ UK** link, we see what's called a [query string][query_string]. A query string is a part of the URL that contains (metadata) fields or parameters and values for those parameters, and it begins with the first ampersand and after the letter *q* in the URL. Each additional parameter begins after each ampersand. In the following query string, I start each newline with a new parameter and end it with its value just to make the URL components easier to see:

```
https://scholar.google.com/scholar?
output=instlink&
q=info:Sj_9YmD0RWYJ:scholar.google.com/&
hl=en&
as_sdt=0,18&
scillfp=9038251622808028378&
oi=lle
```

According to a source that describes [Google Scholar's API][google_scholar_api], some of the parameters above mean the following things:

- output: "Parameter defines the final output you want. It can be set to json (default) to get a structured JSON of the results, or html to get the raw html retrieved." Here, **instlink** refers to **institional link**, but that's a guess.
- q: "Parameter defines the query you want to search. You can also use helpers in your query such as: author:, or source:" Here, my guess is that this refers to Google Scholar's own citation ID for this work.
- hl: "Parameter defines the language to use for the Google search. It's a two-letter language code."
- as_sdt: "Parameter can be used either as a search type or a filter." Here the 18 refers to Kentucky, but the 0 part, I believe, indicates that the query [should not return results][assdt] from court cases.

Due to those parameters, if we click on that **View Now @ UK** link, we are now transported to UK's discovery service, *Primo*, by *Ex Libris*. This means that the URL is the effective point of data exchange between Google Scholar and UK's resources.

In our example, there is only one service that provides access to this work, and that means the Primo hands off our query to UK Library's proxy service, **EZProxy**, which takes us to a copy of that full text.

But if more resources provided access, like both EBSCOhost and ProQuests databases, we would stop on Primo and be offered to select which database we would like to view the full text.

In our case, since we only have one option, the Primo to EZProxy transfer happens quickly, and but I was able to save the Primo URL. If we investigate this URL, we see that it's an OpenURL link, and we can see the fields and values and identify the metadata (I have decomposed the URL for readability). The percent signs and numbers in the title field use [Percent-encoding][percent_encoding], and they convert characters that are URL unfriendly, like empty spaces between words, to something that URLs can handle and parse. See [this page][utf_8] for a table of UTF-8 percent-encodings and the characters they match:

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

The link resolver technology works and translates the metadata as needed for the appropriate service.

We can see another instance of this within Primo itelf. Here I search for the phrase ``electronic resources`` and then filter by WorldCat options. The first option is a work titled **Electronic Resources. Selection and bibliographic control.** This is not available via UK Libraries, and so I would have to request the item through interlibrary loan. If I do that for the main campus, then the URL becomes this. Note that these are essentially metadata elements and that some elements are empty even though they are present in the URL:

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

Here's an example for an article via Primo and ILL:

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

This all works because the various publishers and vendors, and their associated applications, have agreed to use this technology.

Let's consider an example a database that a library subscribes to, like EBCOHost's *Academic Search Complete (ASC)*. I search for the term ``knowledge management``. ASC is an abstracting and indexing, bibliographic database that provides access to some full text articles on its own platform, whereas *Google Scholar* links to full text, only if it is freely available on the web, or links to them via a link resolver, if the *Google Scholar* user has set this up in their settings, and the [library has also configured this on their side][gs_library].

For those bibliographic records that are not available as full text in ASC, the link resolver used by UK Libraries will display an option underneath the bibliographic record in the ASC results or it will display after clicking the full display option of the record. Here we see the link resolver in action in the form of the **View Now @ UK** button. Clicking that will open the link resolver menu, and we will see a list of options for accessing the full text of the article. If the article is available full text in the library, like through a different database. If not, there should be options for requesting the item through inter-library loan or options for accessing the item in the library's physical collections if the library has the item in the stacks.

## Link Resolvers in Practice

Our readings this week by Kasprowski (2012) and by Chisari et al. (2017) discuss link resolver technology and methods to evaluate link resolver technology. It may not be necessary to learn how to hack your way through the OpenURL syntax or other aspects of link resolver URL formatting, but it is a good idea to acquire a basic understanding of how the URLs work in this process.

Let me re-emphasize that the key way that link resolvers work is by embedding citation metadata within the link resolver URL, including administrative metadata. This is another reason to have high quality metadata for our records, as our readings note. By implication, if we find, perhaps by an email from a library patron, that a link has broken in this process, it might be that the metadata is incorrect or has changed in some important way. Knowing the parts of this process aids us in deciphering possible errors that exist when the technology breaks.

For this week, I'll provide a link to *ExLibres Alma* link resolver documentation, which is the link resolver product used by UK Libraries. Let's discuss this documentation in the forum. I want you to find and explain other instances of link resolvers. Be sure to provide links to these examples and articulate ways the technology can be evaluated.

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
[doinumbering]:https://www.doi.org/doi_handbook/2_Numbering.html
[assdt]:https://serpapi.com/google-scholar-courts
