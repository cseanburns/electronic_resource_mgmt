# ERM and ILS

## Introduction

This week we learn about ERM and ILS software.
What are these?

## ILS, the Integrated Library System

**ILS** is an acronym for an **integrated library system**.
We were introduced to the newer term
**library services platform (LSP)**
in the previous section.
Although different in many ways
([Breeding, 2015][breeding2015];
[Breeding, 2020][breeding2020]),
our discussions of the ILS and LSP
this week are relevant
to those types of integrated library systems
that may also be library service platforms,
the latter which are
becoming more common these days.

The differences between ISP and LSP
are both large and small.
The main idea between them is the same
in the sense that they are both
"used by librarians to manage their internal
work and external services," such as
"acquiring and describing collection resources,
making those resources available to their
users through appropriate channels, and
other areas of their [resource management] operations"
([Breeding, 2020, para. 1][breeding2020]).

### Administration

In order to provide the above functions,
the ILS/LSP has an administrative interface
that librarians use to manage their resources.
The interface contains a set of
modules that are common among most software solutions,
although they may be named variously.

- [acquisitions][acquisitions]
- authority files
- [cataloging][cataloging]
- [circulation][circulation]
- course reserves
- [online catalogs][opac]
- patron management
- reports
- [serials][serials]

In the above list,
I've linked to documentation on modules provided by
the [Evergreen][evergreen] open source ILS system.
LibLime's [Bibliovation][bibliovation] LSP offers
comparably named modules for 
discovery, circulation, cataloging, serials,
acquisitions, and systems administration.
Other ILS/LSP solutions may offer specific modules
dedicated to other items in the list,
or those functions might be integrated into
one of the above modules.
Alternatively, new modules appear in LSPs
that that take advantage of special LSP abilities
and digital assets.
For example, the [Alma LSP][almalsp]
provides modules dedicated to
acquisitions, resources, discovery (via Primo),
fulfillment, administration, and analytics.
This is part of what differentiates a LSP
from an ILS.
Please take a moment and read
about these modules in
[Evergreen's][evergreen] documentation,
which is an ILS,
and visit the Alma and LibLime links to
learn more about their specifically LSP products.

### User Interface

Each of you are familiar with an
ILS/LSP from a user perspective and
some of you are familiar with these systems
from a librarian perspective.
In your lifetimes, you have used OPACs
(online public access catalogs) or
**discovery systems** like [InfoKat][infokat],
which uses Alma's Primo discovery system,
you have likely conducted a search for a serial, and
you have most definitely borrowed
a book from a library.
The ILS/LSP makes these end user functions possible.

Until fairly recently,
the **OPAC**
was the primary way to locate and access
items in library collections.
However, in LSPs
the OPAC has evolved into a **discovery system**,
depending on what and
how it searches its records and other factors.
The *Encyclopedia of Knowledge Organization*
describes the differences as such:

> OPACs replicated and extended the functionality of the
> card catalogues they largely replaced in providing a
> finding aid to the books, journals, audiovisual material
> and other holdings of a particular library. The term
> *discovery system* has come into use in the early
> Twenty-first century to describe public-facing electronic
> catalogues which use the technology of the Internet search
> engines to expand the scope of the OPAC to include not
> only library-held content, including entries for journal
> articles and book chapters that were not typically part of
> traditional library catalogues, but also material held
> elsewhere which may be of interest to clients
[(Wells, 2021)][opacIKSO].

In other words, OPACS generally searched against
pre-defined fields that are recorded in MARC such as
author, title, subject, etc. and searched collections,
at first print but later electronic, held by the library.
A discovery system can search additional text,
if available, and can more easily link to items
not in the library collection but which can be acquired 
through interlibrary loan.
A discovery system can also integrate with bibliographic
databases and
return results indexed by those databases.
This saves the user from having to know about
specific topical databases.
For example, UK Libraries provides access to
over 700 databases, and
thus having a discovery system that can access
those is beneficial.
However, none of the above mean that a discovery system,
like InfoKat,
is aware of the totality of a library's collections.
(And it's not always clear what's left out.)

### In Totality

These administrative and end user interfaces
make up the totality of the ILS/LSP software.
In short:

* an **administrative interface** is used by librarians to
  manage tasks provided through modules.
* a **public interface**, such as an OPAC or discovery
  system, is used by librarians and patrons to access the
  library's collections.
  
An ILS/LSP is therefore,
as Stephen Salmon stated in 1975,
a "non-traditional" way of doing traditional things,
such as "acquisitions, cataloging, and circulation,"
but which has now become fairly routine!

Electronic resource librarians might work extensively with
specific resources or modules
in order to administer
the library's digital assets
(e.g., contracts, etc.),
but all librarians use one or more of the ILS/LSP modules.
For example,
when I worked in reference at a small academic library,
I used the Millennium ILS to check out books to users,
to fix borrowing issues,
and to search for works in the OPAC.
Later I primarily used the cataloging module when
I moved to technical services.
What a librarian uses frequently depends
on the organizational structure of a library.
As our reading by
[Miller, Sharp, and Jones (2014)][miller2014] show,
the rise in electronic resources has vastly influenced
the ways librarians structure their organizations,
whose structures were originally informed
by the dictates of a "print-based world".

To learn more about the ILS
and current iterations that we now call LSPs,
see the links in the text above and visit the following:

- Informational Resources:
  - [Library Services Platforms: A Maturing Genre of Products][breeding2015]
  - [Differences between ILS and LSP][breeding2020]
  - [A broad overview of the migration the Aleph ILS to the Alma LSP][almaimplementation]
- Product Descriptions:
  - [Ex Libres Alma and Primo][exlibres]
  - [iii innovative][innovative]
  - [EBSCO Discovery Service][ebdiscovery]

## ERMS, the Electronic Resource Management System

ERMS is an acronym for *electronic resource management system*.
Its function is born from the need to manage
a library's **digital assets**,
for example, the licenses that a library has signed.
In order to manage assets like licenses,
the ERMS can keep track of the signatories,
the terms of the license/contracts,
specific documents related to these processes,
and more.
An ERMS may or may not be integrated
with a library's ILS software.
But it's most likely integrated in a LSP solution.
The Alma LSP, for example, is a LSP that also provides
[electronic resource management][almaerm].
In short,
a library that uses an ILS may also be using
a separate ERMS product.
However, many LSPs have built in
ERMS functionality,
thereby not requiring a second ERMS product.

Like the ILS/LSP,
ERM software is generally divided into modules
that focus the librarian's work on particular duties
and allow librarians to create work flows and
knowledge management systems.
In an ERM like the open source
[CORAL system][coral_modules],
the modules include:

* [Resources][resources_module]: a module "provides a robust
  database for tracking data related to your organization's
  resources ..." and "provides a customizable workflow tool
  that can be used to track, assign, and complete workflow
  tasks."
* [Licensing][licensing_module]: a module for a "flexible
  document management system" that provides options to
  manage licensing agreements and to automate parts of the
  process.
* [Organizations][organizations_module]: this module acts as
  a type of advanced directory to manage the various
  organizations that impact or are involved in the
  management of electronic resources, including "publishers,
  vendors, consortia, and more."
* [Usage Statistics][usage_statistics]: a module providing
  librarians with usage statistics of digital assets by
  platform and by publisher. Supports COUNTER and SUSHI.
  We'll cover COUNTER and SUSHI later in the semester, but
  as a preamble:
    * [COUNTER][counter] "sets and maintains the standard
      known as the Code of Practice and ensures that
      publishers and vendors submit annually to a rigorous
      independent audit", and,
    * [SUSHI][sushi] is a type of protocol to automate
      collecting data on usage statistics.
* [Management][management_module]: this module provides a
  document management system aimed at "storing documents,
  such as policies, processes, and procedures, related to
  the overall management of electronic resources".

## Readings

In our readings this week,
we have three articles that speak to
ILS/LSP and ERM software solutions
and the relationship between the two.

As [Fournie (2020)][fournie2020] notes,
the electronic resource market is consolidating
into a few heavyweights but that this trend does not
have to force libraries into solutions that
lead to vendor lock-in or acceptance of *walled gardens*.
In the process, Fournie (2020) describes two
ERM solutions: Coral and Folio.
The author's descriptions are helpful in understanding
what these two software solutions are capable of providing.

The readings by
[Miller, Sharp, and Jones (2014)][miller2014]
and [Bahnmaier, Sherfey, and Hatfield (2020)][bahnmaier2020]
provides some context about how these
technologies impact librarianship.
Miller et al. (2014) describe a case study
(the literature review is also helpful)
that shows how electronic resources have
impacted organizational structure,
job titles, budgets, and more.
Likewise Bahnmaier et al. (2020) discuss aspects of this
as well as reflect on various changes in library staffing
and how this raises the importance of the library-vendor
relationship.

## Conclusion

With that background in mind,
in this week's forum,
I'll introduce you to the following systems:

- Evergreen ILS
  - [https://evergreen-ils.org/][evergreen]
- Koha ILS
  - [https://koha-community.org/][koha]
- Folio LSP / ERM
  - [https://www.folio.org/][folio]
- Project ReShare (interlibrary loan)
  - [https://projectreshare.org/][projectreshare]
- VuFind (Discovery)
  - [https://vufind.org/vufind/][vufind]
- GOKb Knowledge Base
  - [https://gokb.org/][gokb]
- Coral ERM
  - [http://coral-erm.org/][coral]

We will see what services and modules they provide, and
how they function.
Be sure to visit the links in this page,
especially any documentation.
I'll ask that you log into the relevant services,
test the demos sites, or
watch the demo videos.
This will help get some hands-on experience
with them and also demystify what each do.

## Addendum

In prior semesters, we read articles by
[Wang and Dawes (2012)][wang2012] and
[Wilson (2011)][wilson2011].
I replaced those readings for the Fall 2022 semester,
but for those interested,
I briefly describe them below.

In the article by Wang and Dawes (2012),
the authors describe the
"next generation integrated library system",
which should meet a few criteria that
include the ability to merge ILS software with ERM software.
ERM software solutions exist because
integrated library systems (ILS) failed to include
functions to manage digital assets.
Basically, the ILS was still behaving with a print-mindset,
so to speak, and
was growing stagnant.
Around the time the article was published,
more ILS and ERM software began moving to the cloud,
as was common among many software markets.
This changed the game
because it placed a bigger burden on
software companies to maintain their software.
Based on demand and need,
the LSP was created as a next-generation
ILS that included ERM functionality.
So it's likely that even though the LSP might
replace the ILS/ERM combo someday,
it could be that we'll live in a dual world where
some libraries use a LSP and some use the LSP/ERM combo.

Despite the technical aspects of these solutions,
at its basic,
both ILS/LSP and ERM software solutions focus
on managing assets
(books, serials, [realia][realia], etc)
so that librarians can organize and
users and librarians can retrieve those assets.
There's no requirement to use any solution
offered by a library vendor, and
that's the point of the
Wilson (2011) article,
which shows how regular software can be used
to function as a homegrown solution for
creating and implementing an ERM work flow.

## Readings / References

Bahnmaier, S., Sherfey, W., & Hatfield, M. (2020). Getting
more bang for your buck: Working with your vendor in the age
of the shrinking staff. *The Serials Librarian, 78*(1–4),
228–233.
[https://doi.org/10.1080/0361526X.2020.1717032][bahnmaier2020]

Fournie, J. (2020). Managing electronic resources without
buying into the library vendor singularity. *The Code4Lib
Journal, 47*.
[https://journal.code4lib.org/articles/14955][fournie2020]

Miller, L. N., Sharp, D., & Jones, W. (2014). 70% and
climbing: E-resources, books, and library restructuring.
*Collection Management, 39*(2–3), 110–126.
[https://doi.org/10.1080/01462679.2014.901200][miller2014]

## Additional References

Anderson, E. K. (2014). Chapter 4: Electronic Resource
Management Systems and Related Products. Library Technology
Reports, 50(3), 30–42.
[https://journals.ala.org/index.php/ltr/article/view/4491][anderson2014]

Breeding, M. (2015). *Library Technology Reports, 51*(4).
Chapters 1-5. 
[https://journals.ala.org/index.php/ltr/issue/view/509][breeding2015]

Breeding, M. (2020). Smart libraries Q&A: Differences
between ILS and LSP. *Smart Libraries Newsletter, 40*(10),
3–4.
[https://librarytechnology.org/document/25609][breeding2022]

Hosburgh, N. (2016). Approaching discovery as part of a
library service platform. In K. Varnum (Ed.), *Exploring
Discovery: The Front Door to your Library’s Licensed and
Digitized Content*. (pp. 15-25). Chicago, IL: ALA Editions.
[https://scholarship.rollins.edu/as_facpub/138/][hosburgh2016]

Salmon, S. R. (1975). *Library automation systems*. New York:
Marcel Dekker.

Wang, Y., & Dawes, T. A. (2012). The Next generation
integrated library system: A promise fulfilled? *Information
Technology and Libraries, 31*(3), 76–84.
[https://doi.org/10.6017/ital.v31i3.1914][wang2012]

Wells, D. (2021). Online public access catalogues and
library discovery systems. In B. Hjørland & C. Gnoli (Eds.),
Encyclopedia of Knowledge Organization (Vol. 48, pp.
457–466).
[https://www.isko.org/cyclo/opac][opacIKSO]

Wilson, K. (2011). Beyond library software: New tools for
electronic resources management. *Serials Review, 37*(4),
294–304.
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
[innovative]:https://www.iii.com/products/
[evergreen]:http://docs.evergreen-ils.org/
[exlibres]:https://knowledge.exlibrisgroup.com/campusM/Product_Documentation/Custom_Integrations_(Sample)/Ex_Libris_Alma_and_Primo_(Library)
[folio]:https://www.folio.org/
[fournie2020]:https://journal.code4lib.org/articles/14955
[gokb]:https://gokb.org/
[hosburgh2016]:https://scholarship.rollins.edu/as_facpub/138/
[infokat]:https://saalck-uky.primo.exlibrisgroup.com/discovery/search?vid=01SAA_UKY:UKY&lang=en
[koha]:https://koha-community.org/
[licensing_module]:http://coral-erm.org/licensing/
[management_module]:http://coral-erm.org/management/
[miller2014]:https://doi.org/10.1080/01462679.2014.901200
[opac]:http://docs.evergreen-ils.org/reorg/3.2/opac/
[opacIKSO]:https://www.isko.org/cyclo/opac
[organizations_module]:http://coral-erm.org/organizations/
[projectreshare]:https://projectreshare.org/
[realia]:https://archives.yale.edu/subjects/33488
[resources_module]:http://coral-erm.org/resources/
[serials]:http://docs.evergreen-ils.org/reorg/3.2/serials/
[sushi]:https://www.niso.org/standards-committees/sushi
[usage_statistics]:http://coral-erm.org/usage-statistics/
[vufind]:https://vufind.org/vufind/
[wang2012]:https://doi.org/10.6017/ital.v31i3.1914
[wilson2011]:https://doi.org/10.1080/00987913.2011.10765404
