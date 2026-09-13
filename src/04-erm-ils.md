# ERM and ILS

## Introduction

In this section we dive deeper into electronic resource management systems (**ERMS**), integrated library systems (**ILS**), and library service platforms (**LSP**).
Specifically, we seek to:

- Understand the **ILS** and **LSP**. We define **integrated library systems** and **library service platforms** and highlight their roles in managing physical and digital assets.
- Examine the **modular structure of ILS/LSP**. We look at how these products are structured into **modules** (acquisitions, circulation, cataloging, etc.) to handle library tasks and processes.
- Learn about the **evolution of user interfaces** of these systems. We will discuss the transition from **OPACs (online public access catalogs)** to modern **discovery systems**, and
  how these systems enhance search capabilities and integrate external sources.
- Introduce the role of **ERMS (electronic resource management systems)**. We learn how ERMS assist in managing the digital assets and licenses of a library.
- Explore the **interconnectedness of systems**. We specifically explore the relationship between ILS, LSP, and ERMS, and how they work together to manage a library's collection and provide access to users.

## The ILS and the LSP

**ILS** is an acronym for an **integrated library system**.
We were introduced to the newer term **library services platform (LSP)** in the previous section.
Although similar in ways ([Breeding, 2015][breeding2015]; [Breeding, 2020][breeding2020]),
the latter are becoming more common because of how they handle electronic resources.
The main distinction is that the LSP is more focused on digital and electronic resources, and the ILS is primarily an extension of the card catalog system model.

Regardless, both the ILS and the LSP are "used by librarians to manage their internal work and external services," such as
"acquiring and describing collection resources, making those resources available to their users through appropriate channels, and other areas of their [resource management] operations"
([Breeding, 2020, para. 1][breeding2020]).
We begin by discussing the modular structure of these systems. 

### ILS/LSP Modules

ILS/LSP products are used for multiple tasks, and these tasks are divided up into **modules**.
These modules are accessed in the ILS/LSP through an administrative interface.
Some of the common modules among these products include:

- [acquisitions][acquisitions] module
- authority files module
- [cataloging][cataloging] module
- [circulation][circulation] module
- course reserves module
- [online catalogs][opac] module
- patron management module
- reports module
- [serials][serials] module

In the above list, I've linked to the open source documentation from [Evergreen][evergreen], which is an ILS.
LibLime's [Bibliovation][bibliovation], an LSP, offers comparably named modules for discovery, circulation, cataloging, serials, acquisitions, and systems administration.
Other ILS/LSP solutions offer specific modules dedicated to other items in the list, or those functions might be integrated into one of the above modules.

New modules appear in LSPs that take advantage of LSP abilities and digital assets.
For example, the [Alma LSP][almalsp] provides modules dedicated to acquisitions, resources, discovery (via Primo), fulfillment, administration, and analytics.
These modules are a reflection of the LSP's focus on digital and electronic assets.

> I suggest the reader take a moment and read about these modules in the links provided.
> Specifically visit the Alma and LibLime links to learn more about their specific LSP products.

### Example ILS and LSP Products

Some of the major ILS/LSP products on the market include (not even remotely an exhaustive list):

 | Type   | Product                                  | Company                    | Common Library Type |
 | ------ | ---------                                | ---------                  | ---                 |
 | LSP    | EBSCO Folio                              | EBSCO Information Services | Academic            |
 | LSP    | Ex Libris Alma                           | Clarivate                  | Academic            |
 | LSP    | Folio                                    | Open Library Foundation    | Academic            |
 | LSP    | OCLC WorldShare Management Service (WMS) | OCLC                       | Academic            |
 | LSP    | Sierra                                   | Clarivate                  | Public              |
 | ILS    | Apollo                                   | Biblionix                  | Public              |
 | ILS    | Evergreen                                | The Evergreen Project      | Public              |
 | ILS    | Koha                                     | Horowhenua Library Trust   | Public              |
 | ILS    | Polaris                                  | Clarivate                  | Public              |
 | ILS    | Symphony                                 | SirsiDynix                 | Public              |

 See the [Library Technology Product Directory][ltpd_lt] for a more comprehensive list of products.

### User Interface

If you have used **OPACs** (online public access catalogs) or **discovery systems**, you are already familiar with an ILS/LSP from a user's perspective.
You have likely conducted a search for a **serial** (e.g., journal), and you have most definitely borrowed a book from a library.
The ILS OPAC or the LSP discovery systems makes these end user functions possible.

For several decades and until recently, the OPAC was the primary way to locate and access items in library collections.
In LSPs the OPAC has evolved into a **discovery system**.
This difference is based on what and how it searches its records and other factors.
The *Encyclopedia of Knowledge Organization* describes the differences as such:

> OPACs replicated and extended the functionality of the card catalogues they largely replaced in providing a finding aid to the books, journals, audiovisual material and other holdings of a particular library.
> The term *discovery system* has come into use in the early Twenty-first century to describe public-facing electronic catalogues which use the technology of the Internet search engines to expand
> the scope of the OPAC to include not only library-held content, including entries for journal articles and book chapters that were not typically part of traditional library catalogues, but
> also material held elsewhere which may be of interest to clients [(Wells, 2021)][opacIKSO].

In other words, OPACS generally searched against pre-defined fields recorded in **MARC** (i.e., author, title, subject, etc.).
These collections include print works but later electronic ones too held by the library.
The form didn't matter as long as there was a MARC record for it.
A discovery system goes much beyond this and can search additional text, if available.
It can more easily link to items not in the library collection but which can be acquired through **interlibrary loan** or open access content.

A discovery system also integrates with **bibliographic databases** and returns results indexed by those databases.
This saves the user from having to know about specific **topical databases**.
For example, many academic libraries provides access to hundreds of databases (or thousdands), and having a discovery system that can access those is beneficial.
However, this does not mean that a discovery system is aware of all of a library's collections or all of its databases.
And it's not always clear what's left out.

In summary, some key differences for the user are:

- **OPACs** primarily search cataloged fields in **MARC** records.
- **Discovery systems** integrate external sources (like databases) into the search process and are able to do some **full text** searching.

> Question: Given the differences between the indexes that OPACs and discovery systems search, how do those differences impact search query construction?

### Indexing

If a discovery system has broader index than an OPAC, how does that happen?

There are three components that make this happen:

- knowledgebases
- discovery indexes
- discovery services

The **knowledgebase** describes electronic resources and their coverage.
For example, a knowledgebase might know that JSTOR Arts & Sciences contains *Journal X*, volumes A-M.
It may also contain information about providers, platforms, identifiers, coverage dates, and the targets needed to connect users to those resources.

A **discovery index** contains searchable representations of the content itself.
For example, it might contain a record that reflects the following bibliographic data:

> Smith, J. (2026). Interesting article. *Journal X A*(3), 200-225.

Rather than searching the JSTOR database directly when a user submits a query, the discovery system can search this previously constructed index.

A **discovery service** provides the user-facing search interface.
It brings together the discovery index, the library's local collection, and information about the library's electronic holdings.
This allows a search to retrieve a result about Smith's article from the discovery index while also also determining whether the library provides access to it and, when appropriate, providing a path to the full text
(or a mechanism to submit an interlibrary loan request).

It is important to know that both the knowledgebase and the discovery index are maintained by the vendor.
Libraries using the same system (for example, libraries using Ex Libris Alma and Primo) can draw from the same shared knowledgebase and discovery index.
However, each library configures the system according to its own collections.

That configuration reflects which resources the library owns, licenses, or otherwise provides access to.
Thus, two libraries may use the same vendor-maintained knowledgebase and discovery index but **expose** different resources to their users.

Furthermore, since those knowledgebases are maintained by specific vendors, those vendors do not necessarily control or own all the resources they describe or index.
They must therefore obtain information and often establish agreements with publishers, aggregators, databases providers, and other content vendors.[^1]
That is, a resource might be represented in a knowledgebase without its content being included in the discovery index.
This is one reason a discovery system does not necessarily expose everything a library has to offer, especially the contents of all the databases to which the library provides access.[^2]

[^1]: This is not dissimilar to what Google Scholar must do to create its index.
[^2]: Discovery systems cannot search all the collection, even though they may seem to. This is one reason why librarians cannot depend completely on discovery systems when searching their collections and why they need to become familiar with other library resources.

### Admin and Public Interfaces

From their ancient beginnings, these ILS/LSPs, as [Stephen Salmon (1975)][salmon1975] stated, are "non-traditional" ways of doing traditional things,
such as "acquisitions, cataloging, and circulation," but which has now become fairly routine!

Electronic resource librarians might work extensively with specific resources or modules in order to administer the library's digital assets (e.g., contracts, etc.).
However, all librarians use one or more of the ILS/LSP modules at some point.
For example, when I worked in reference at a small academic library, I used the Millennium ILS to check out books to users, to fix borrowing issues, and to search for works in the OPAC.
Later I primarily used the cataloging module when I moved to technical services.
What a librarian uses frequently depends on the organizational structure of a library and their role in that library.
And as [Miller, Sharp, and Jones (2014)][miller2014] show, the rise in electronic resources has influenced the ways librarians structure their organizations
(see also [Bahnmaier, Sherfey, and Hatfield (2020)][bahnmaier2020]).
Because much of that organizational structure was originally informed by the dictates of a "print-based world".

In summary, the administrative interface includes modules to manage collections, patron accounts, etc.
The end user interfaces are for people looking for information.
Combined they make up the totality of the ILS/LSP software.
In short:

* an **administrative interface** is used by librarians to manage tasks provided through modules.
* a **public interface**, such as an OPAC or discovery system, is used by librarians and patrons to access the library's collections.

While ILS/LSP solutions are essential for managing physical and digital collections, ERM systems play a pivotal role in managing the library's digital resources and their associated licenses.

## ERMS, the Electronic Resource Management System

ERMS is an acronym for *electronic resource management system*.

Electronic resources created management problems that traditional ILSs were not designed to handle particularly well.
An electronic resource ma involve licenses, subscriptions, packages, platforms, vendors, access rights, usage statistics, renewal dates, and other information and workflows
that do not fit neatly into the bibliographic, holdings, and item records traditionally used by an ILS.

ERMSs thus developed as separate products to address these needs.
Rather than managing the digital content itself, an ERMS primarily manages information and workflows associated with a library's electronic resources.

For example, an ERMS can keep track of licenses and contracts, including their signatories, terms, dates, associated documents, and other administrative information.

> Licenses will be discussed in a later section, but they establish such things as who may access a resource, how it may be used, concurrent-user limits, the length of access, and
> whether the library retains access to content after a subscription ends.

An ERMS may exist as a separate system alongside an ILS or may be integrated with other library systems.
Electronic resource management is more commonly incorporated directly into an LSP.
Alma, for example, is an LSP that includes [electronic resource management][almaerm].
Thus, a library using a traditional ILS might use a separate ERMS product to manage its electronic resources, but
a library using an LSP may perform those functions within the LSP itself.

Like the ILS/LSP, ERM software divides its functions into modules.
These modules support particular kinds of ERM work and help librarians organize related data, documents, and workflows.
In an ERM like the open source [CORAL system][coral_modules], the modules include:

* [Resources][resources_module]: a module that maintains information about electronic resources and provides workflows for assigning and tracking related tasks.
* [Licensing][licensing_module]: a module that provides document and workflow management for licenses and licensing agreements.
* [Organizations][organizations_module]: a module that maintains information about organizations involved in electronic resource management, including publishers, vendors, and consortia.
* [Usage Statistics][usage_statistics]: a module that collects and organizes usage statistics by platform and publisher. It supports (or should) COUNTER and SUSHI, which will examine in a later chapter.
    * [COUNTER][counter] establishes standards for reporting the use of electronic resources.
    * [SUSHI][sushi] is a type of protocol for automating the retrieval of standardized usage reports.
* [Management][management_module]: a module that provides document management for policies, procedures, and other documents associated with the overall management of electronic resources.

A knowledgebase and an ERMS serve different purposes even though they contain related information.
A knowledgebase describes electronic-resource packages, their contents, coverage, and linking information.
It's ultimately used to make discovery happen for users.
An ERMS, however, records the library's administrative relationship with those resources:
why the library has access, under what terms, through which vendor, for how long, at what cost, and what work must be performed to maintain that access.

## Conclusion

As [Fournie (2020)][fournie2020] notes, the electronic resource market is consolidating into a few heavyweights.
Yet this trend does not have to force libraries into solutions that lead to vendor lock-in or acceptance of *walled gardens*.
As such, there has been a growing interest in open-source alternatives, such as Coral and Folio, especially among libraries seeking more customizable solutions.
It's interesting, also, that Fournie highlights "non domain-specific software," too.
While this might be viable for some libraries or systems, a decision to use "non domain-specific software" might be more viable for smaller systems than larger, more complicated ones.

## Appendix I

### Open Source Products

- [Coral ERMS][coral]
- [Evergreen ILS][evergreen]
- [Folio LSP][folio]
- [GOKb Knowledge Base][gokb]
- [Koha ILS][koha]
- [Project ReShare (interlibrary loan)][projectreshare]
- [VuFind (Discovery)][vufind]

### Other Product Descriptions:

  - [EBSCO Discovery Service][ebdiscovery]
  - [Ex Libres Alma and Primo][exlibres]
  - [iii innovative][innovative]

## Appendix II

### Migration Example

A detailed plan on CUNY's implmentation of Alma LSP:

- [A broad overview of the migration the Aleph ILS to the Alma LSP][almaimplementation]

## References and Suggested Readings

Anderson, E. K. (2014).
Chapter 4: Electronic Resource Management Systems and Related Products.
*Library Technology Reports, 50*(3), 30–42.
[https://journals.ala.org/index.php/ltr/article/view/4491][anderson2014]

Bahnmaier, S., Sherfey, W., & Hatfield, M. (2020).
Getting more bang for your buck: Working with your vendor in the age of the shrinking staff.
*The Serials Librarian, 78*(1–4), 228–233.
[https://doi.org/10.1080/0361526X.2020.1717032][bahnmaier2020]

Breeding, M. (2015).
*Library Technology Reports, 51*(4). Chapters 1-5. 
[https://journals.ala.org/index.php/ltr/issue/view/509][breeding2015]

Breeding, M. (2020).
Smart libraries Q&A: Differences between ILS and LSP.
*Smart Libraries Newsletter, 40*(10), 3–4.
[https://librarytechnology.org/document/25609][breeding2022]

Fournie, J. (2020).
Managing electronic resources without buying into the library vendor singularity.
*The Code4Lib Journal, 47*.
[https://journal.code4lib.org/articles/14955][fournie2020]

Hosburgh, N. (2016).
Approaching discovery as part of a library service platform.
In K. Varnum (Ed.),
*Exploring Discovery: The Front Door to your Library’s Licensed and Digitized Content*.
(pp. 15-25). Chicago, IL: ALA Editions.
[https://scholarship.rollins.edu/as_facpub/138/][hosburgh2016]

Miller, L. N., Sharp, D., & Jones, W. (2014).
70% and climbing: E-resources, books, and library restructuring.
*Collection Management, 39*(2–3), 110–126.
[https://doi.org/10.1080/01462679.2014.901200][miller2014]

Salmon, S. R. (1975).
*Library automation systems*.
New York: Marcel Dekker.
[https://search.worldcat.org/title/1852364][salmon1975]

Wang, Y., & Dawes, T. A. (2012).
The Next generation integrated library system: A promise fulfilled?
*Information Technology and Libraries, 31*(3), 76–84.
[https://doi.org/10.6017/ital.v31i3.1914][wang2012]

Wells, D. (2021).
Online public access catalogues and library discovery systems.
In B. Hjørland & C. Gnoli (Eds.),
Encyclopedia of Knowledge Organization (Vol. 48, pp. 457–466).
[https://www.isko.org/cyclo/opac][opacIKSO]

Wilson, K. (2011).
Beyond library software: New tools for electronic resources management.
*Serials Review, 37*(4), 294–304.
[https://doi.org/10.1080/00987913.2011.10765404][wilson2011]

[acquisitions]:http://docs.evergreen-ils.org/reorg/3.2/acquisitions/
[almaerm]:https://knowledge.exlibrisgroup.com/Alma/Product_Documentation/010Alma_Online_Help_(English)/Electronic_Resource_Management
[almaimplementation]:https://guides.cuny.edu/LSPImplementation
[almalsp]:https://exlibrisgroup.com/products/alma-library-services-platform/
[anderson2014]:https://journals.ala.org/index.php/ltr/article/view/4491
[bahnmaier2020]:https://doi.org/10.1080/0361526X.2020.1717032
[bibliovation]:https://liblime.com/bibliovation/
[breeding2015]:https://journals.ala.org/index.php/ltr/issue/view/509
[breeding2020]:https://librarytechnology.org/document/25609
[cataloging]:http://docs.evergreen-ils.org/reorg/3.2/cataloging/
[circulation]:http://docs.evergreen-ils.org/reorg/3.2/circulation/
[coral]:http://coral-erm.org/
[coral_modules]:http://coral-erm.org/modules/
[counter]:https://www.projectcounter.org/about/counter-for-libraries/
[ebdiscovery]:https://www.ebsco.com/products/ebsco-discovery-service
[evergreen]:http://docs.evergreen-ils.org/
[exlibres]:https://knowledge.exlibrisgroup.com/campusM/Product_Documentation/Custom_Integrations_(Sample)/Ex_Libris_Alma_and_Primo_(Library)
[folio]:https://www.folio.org/
[fournie2020]:https://journal.code4lib.org/articles/14955
[gokb]:https://gokb.org/
[hosburgh2016]:https://scholarship.rollins.edu/as_facpub/138/
[innovative]:https://www.iii.com/products/
[koha]:https://koha-community.org/
[licensing_module]:http://coral-erm.org/licensing/
[ltpd_lt]:https://librarytechnology.org/products/
[management_module]:http://coral-erm.org/management/
[miller2014]:https://doi.org/10.1080/01462679.2014.901200
[opac]:http://docs.evergreen-ils.org/reorg/3.2/opac/
[opacIKSO]:https://www.isko.org/cyclo/opac
[organizations_module]:http://coral-erm.org/organizations/
[projectreshare]:https://projectreshare.org/
<!-- [realia]:https://archives.yale.edu/subjects/33488 -->
[resources_module]:http://coral-erm.org/resources/
[salmon1975]:https://search.worldcat.org/title/1852364
[serials]:http://docs.evergreen-ils.org/reorg/3.2/serials/
[sushi]:https://www.niso.org/standards-committees/sushi
[usage_statistics]:http://coral-erm.org/usage-statistics/
[vufind]:https://vufind.org/vufind/
[wang2012]:https://doi.org/10.6017/ital.v31i3.1914
[wilson2011]:https://doi.org/10.1080/00987913.2011.10765404
