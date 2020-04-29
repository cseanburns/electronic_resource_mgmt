## Interoperability

This week we learn about interoperability and link resolvers. Link
resolvers are a technical solution to help users of electronic resources
access the full text of a citation in a library's collections, or to
acquire access through some other means, such as through interlibrary
loan or through identifying the location of the work on the library
shelf. In particular, the technology is a way to provide access to a
library's collections from a browser even if the user is not
specifically searching within the library's website, or more
specifically, within its discovery system. If it helps, link resolvers
are simply a way to search across multiple systems at one, just like
you or I would do in a federated search discovery system.

Let's imagine that you have conducted a search in *Google Scholar*,
let's call this the *source*, and you have identified an article that
you wish to retrieve. If you have made *Google Scholar* aware that you
are affiliated with a specific library and if that library uses a link
resolver service, then:

1. the metadata about the article will be extracted from the source, in
   this case, that's *Google Scholar*, and this will be added to 
2. the metadata about the institution (administrative metadata, such as
   an institutional ID number).
3. the metadata is converted into a URL query that queries the library's
   collections
4. the user is then presented with *target* options (or taken directly
   to the work) for retrieving the article, and the options may include
   full text access from various and possibly multiple vendors or
   publishers, information about the physical location (e.g., on the
   shelves) if it exists, or options to request the work through
   interlibrary loan. Ideally, it will lead the user directly to the
   full text.

See [Link Resolver 101][1] for additional details and this historical
piece on [link resolvers][2].

[1]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/#LinkResolver
[2]:https://web.archive.org/web/20140419201741/http://lj.libraryjournal.com:80/2004/04/ljarchives/the-lure-of-linking/

Let's consider a basic keyword search on *Google Scholar* for the term
**[ knowledge management ]**. One of the first items listed in the
results page is to an article titled "A systems thinking framework for
knowledge management." If you've already gone to *Google Scholar's*
settings, and added your library to the **Library Links** list, then you
should see a **View Now @ UK** link off to the right of your searches
there. This indicates the likelihood, although there could be an error,
that the article is available through UK Libraries.

Now we take a look at the URL for the **View Now @ UK** link by right
clicking on it and breaking it down into its components. What we see
here is what is called a [query string][3]. A query string is a part of
the URL that contains (metadata) fields and values for those fields, and
it begins after the letter *q* in the URL. Each new parameter, or field,
begins after each ampersand. In the query below, I start each newline
with a new field and end it with its value:

```
https://scholar.google.com/scholar?
output=instlink&
q=info:cGrF-EL6GzgJ:scholar.google.com/&
hl=en&as_sdt=0,18&
scillfp=3492933523235496650&
oi=lle
```

[3]:https://en.wikipedia.org/wiki/Query_string

Most of what we see in that URL is meaningless to us because it's
metadata specific to Google's protocols, but if we click on that **View
Now @ UK** link, we are now transported, because of the information in
the previous link, to UK's discovery service, *Primo*, by *Ex Libris*.

In Primo, if we look at the new URL, we see specifically that it's an
OpenURL link and we can see the fields and values and identify the
metadata (one line is broken up for readability). The percent signs and
numbers in the title field are called [Percent-encoding][4], and are
used to convert characters that are URL unfriendly, like empty spaces
between words, to something that URLs can handle and parse. See [this
page][5] for a table of UTF-8 percent-encodings and the characters they
match:

[4]:https://en.wikipedia.org/wiki/Percent-encoding
[5]:https://www.w3schools.com/tags/ref_urlencode.asp

```
https://saa-primo.hosted.exlibrisgroup.com/primo-explore/openurl?
sid=google&
auinit=B&
aulast=Rubenstein-Montano&
atitle=A%20systems%20thinking%20framework%20for%20knowledge%20management&
id=doi:10.1016%2FS0167-9236(00)00116-0&
title=Decision%20support%20systems%20for%20C%20management%20
  across%20the%20U.S.%20Corn%20Belt%20using%20NASA%20remote%20
  sensing%20data%20products%20...%20annual%20report&
volume=31&
issue=1&
date=2001&
spage=5&
vid=UKY&
institution=UKY&
url_ctx_val=&
url_ctx_fmt=null&
isSerivcesPage=true
```

Also, the resulting page is the menu of options available to us to gain
access to the work. The link resolver technology works and translates
the metadata as needed for the appropriate service. If I click on the
ILL link, then the URL becomes this, which will be used to complete a
ILL form (one line is broken up for readability):

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

This all works because the various publishers and vendors, and their
associated applications, have agreed to using this technology.

Now let's thus consider an example of a database that a library
subscribes to, such as EBCOHost's *Academic Search Complete*. Here again
I search for the term [ knowledge management ]. *Academic Search
Complete* is more than a bibliographic database, it also provides access
to full text articles within its own database (*Google Scholar* will
link to them if they're freely available on the web, but it doesn't
actually collect them). However, *ASC* also provides access to
bibliographic records to items that it does not provide full text access
to. This is where the link resolver comes into play.

For those bibliographic records that are not available as full text in
*ASC*, the link resolver used by UK Libraries will be displayed
underneath the record in the *ASC* results or even after clicking on the
full display of the record. Here you see the link resolver in action in
the form of the **View Now @ UK** button. Clicking on that will open the
link resolver menu, and we will see a list of options for accessing the
full text of the article. If the article is available full text
somewhere in the library, such as through a different database, we
should see that here, but if not, there should be options for requesting
the item through interlibrary loan, as well as options for accessing the
item in the library's physical collections if it exists there.

## Link Resolvers in Practice

Our readings this week by Kasprowski (2012) and by Chisari et al. (2017)
discuss in some ways how the link resolver technology works and how to
evaluate link resolver technology. It may not be necessary to learn how
to hack your way through the OpenURL syntax or other aspects of link
resolver URL formatting, but it is a good idea to have at least a basic
understanding how the URLs work in this process.

Let me highlight that the key way that link resolvers work is by
embedding citation metadata within the link resolver URL, including
administrative metadata. Thus, as you guessed it, this is another reason
why it's important to have high quality metadata for our records, as
our readings note, and thus, by implication, if we find that link
resolvers break down, it might be that the metadata is incorrect or has
changed in some important way.

For this week, I'll provide a link to the some documentation about the
link resolver technology used by UK Libraries use of *ExLibres Alma*.
Let's discuss this documentation in this week's forum. I also want you
to find and explain other instances of link resolvers. Be sure to
provide links to these examples and perhaps point out some ways the
technology can be evaluated.

**Documentation to read and discuss:**

[https://knowledge.exlibrisgroup.com/Alma/Product_Materials/050Alma_FAQs/E-Resource_Management/Link_Resolver%2C_Usage][6]

**Additional information:**

- URL syntax components: [https://tools.ietf.org/html/rfc3986#page-16][7]
- URL Encode / Decode Percent Encoding: [https://www.url-encode-decode.com/][8]
- How Google Scholar works with libraries: [https://scholar.google.com/intl/en/scholar/libraries.html][9]

[6]:https://knowledge.exlibrisgroup.com/Alma/Product_Materials/050Alma_FAQs/E-Resource_Management/Link_Resolver%2C_Usage
[7]:https://tools.ietf.org/html/rfc3986#page-16
[8]:https://www.url-encode-decode.com/
[9]:https://scholar.google.com/intl/en/scholar/libraries.html
