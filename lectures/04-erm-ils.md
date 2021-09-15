**TO DO**: The next time this course is taught, include a discussion of:

- CORAL documentation and and explanation of work flow and CORAL resources: https://docs.coral-erm.org/en/latest/index.html
- Evergreen documentation: https://wiki.evergreen-ils.org/doku.php?id=start
- List of libraries that use Evergreen and discuss the customized looks: https://wiki.evergreen-ils.org/doku.php?id=zzz_archive:evergreen_libraries
- Koha and demo: https://koha-community.org/
- Folio and demo: https://wiki.folio.org/ ; https://www.folio.org/ ; and demo sites listed on this page: https://wiki.folio.org/

# Lecture 4: ERM and ILS

This week we will be learning about ERM and ILS software. First off, what are these?

## ILS, the Integrated Library System

**ILS** is an acronym for an **integrated library system**. We've also been introduced to the term **library services platform (LSP)**. Our discussions of the ILS this week are relevant to those types of an ILS that may also be an LSP, which are increasingly more common these days.

Regardless, each of you are familiar with an ILS/LSP from a user perspective and some of you are familiar with these systems from a librarian perspective. In your lifetimes, you have used an OPAC (online public access catalog) or a **discovery** interface, you have likely conducted a search for a serial, and you have most definitely borrowed a print book from a library. These are the kinds of kinds of functions that an ILS provides for library users.

An ILS also provides an administrative interface that librarians use to manage those processes. This interface includes functions to manage acquisitions, cataloging, circulation, and serials, and the OPAC, where the interfaces to these in the ILS are referred to as **modules**. You should read about these modules in the open source ILS called [Evergreen][evergreen] by sifting through some of Evergreen's documentation.

Hence, the ILS generally provides two separate interfaces:

* an **administrative interface** to be used by librarians to manage the tasks per the modules
* a **public interface** for patrons to access the works of a library

Tasks that an ILS provides include modules that cover:

Administrative:

* [Acquisitions][acquisitions]
* [Cataloging][cataloging]
* [Circulation][circulation]
* [Serials][serials]

Public:

* [OPAC][opac] interface
* [Discovery][hosburgh2016] interface 

An ILS is therefore, as Stephen Salmon stated in 1975, a non-traditional way of doing traditional things, such as "acquisitions, cataloging, and circulation," but which is now fairly traditional! Some librarians who would work with an ILS include:

1. Reference: who use the OPAC or discovery interface
1. Cataloging and Technical Services: who use the cataloging and serial's modules and perhaps also the acquisition's module
1. Circulation: who would use the circulation module
  * Interlibrary Loan department: if such a department exists because the library is big enough to have one, they would also use the circulation module

All of those librarians might use multiple modules of the ILS, but might predominately use one module more frequently than others in their day-to-day work. For example, when I worked in reference at a small academic library, I used the Millennium ILS to check out books to users, to fix borrowing issues, and to search for works in the OPAC. Later I used the cataloging module when I moved to technical services. However, what a librarian uses frequently depends on the organizational structure of a library. As our reading by Miller, Sharp, and Jones (2014) show, the rise in electronic resources has vastly influenced the ways librarians structure their organizations, whose structure was originally informed by the dictates of a "print-based world". In those structures, librarians may either hold positions where their work is streamlined and focused on one task, such as collections, or on multiple tasks.

To learn more about ILS, and current iterations that we now call LSPs, see the following links:

- Product: [Ex Libres Alma and Primo][exlibres]
- Product: [Encore][encore]
- Product: [EBSCO Discovery Service][ebdiscovery]
- Resource: [Library Services Platforms: A Maturing Genre of Products / Marshall Breeding][breeding2015]
- Resource: [A broad overview of the migration the Aleph ILS to the Alma LSP][almaimplementation]

[exlibres]:https://knowledge.exlibrisgroup.com/campusM/Product_Documentation/Custom_Integrations_(Sample)/Ex_Libris_Alma_and_Primo_(Library)
[encore]:https://www.iii.com/products/encore/
[ebdiscovery]:https://www.ebsco.com/products/ebsco-discovery-service
[breeding2015]:https://journals.ala.org/ltr/issue/download/509/259
[almaimplementation]:https://guides.cuny.edu/LSPImplementation

## ERM, the Electronic Resource Management System

ERM is an acronym for *electronic resource management* system. Its function is born out of the need to manage digital assets and provide users with access to those assets. An ERM may or may not be integrated, as one product, with a library's ILS software. ERM software is primarily a behind the scenes software. Similar to the ILS, ERM software is generally divided into modules that focus the librarian's work on particular duties and allow librarians to create work flows and knowledge management systems. In an ERM like the open source [CORAL system][coral_modules], the modules includes:

* [Resources][resources_module]: a module "provides a robust database for tracking data related to your organization's resources ..." and "provides a customizable workflow tool that can be used to track, assign, and complete workflow tasks."
* [Licensing][licensing_module]: a module for a "flexible document management system" that provides options to manage licensing agreements and to automate parts of the process.
* [Organizations][organizations_module]: this module acts as a type of advanced directory to manage the various organizations that impact or are involved in the management of electronic resources, including "publishers, vendors, consortia, and more."
* [Usage Statistics][usage_statistics]: a module providing librarians with usage statistics of digital assets by platform and by publisher. Supports COUNTER and SUSHI. We'll cover COUNTER and SUSHI later in the semester, but as a preamble:
  * [COUNTER][counter] "sets and maintains the standard known as the Code of Practice and ensures that publishers and vendors submit annually to a rigorous independent audit", and,
  * [SUSHI][sushi] is a type of protocol to automate collecting data on usage statistics.
* [Management][management_module]: this module provides a document management system aimed at "storing documents, such as policies, processes, and procedures, related to the overall management of electronic resources".

In our readings this week, we have three articles that speak to ILS and ERM software as well as the relationship between the two, and an additional article that offers organizational context. The first reading, by Miller, Sharp, and Jones (2014) provides some context by describing a case study (the literature review is also helpful) that shows how electronic resources have impacted organizational structure, job titles, budgets, and more. The article by Anderson (2014) lists and describes various ERM solutions. As I mentioned in a previous lecture, electronic resources is a fast moving area, and even though this article (or chapter) is a handful of years old, some products are no longer available, have been merged into others, or sold off. Still, the article is helpful in describing:

* the role of vendors in the ERM market
* the importance and rise of open source ERMs as well as the mark that various homegrown solutions have made
* related software that plays a role, including:
  * Discovery: federated and indexed
  * Integrated library systems
  * Interlibrary loan software
  * Link resolvers
  * Ticket management software

In the article by Wang & Dawes (2012), the authors describe the "next generation integrated library system", which should meet a few criteria that include the ability to merge ILS software with ERM software, the latter having come into creation because of the lack of development among ILS systems, which were stagnating and not responding to changing work flows and work formats (i.e., print to electronic) at the time. But around the time the article was published, more ILS and ERM software began moving to the cloud, as was common among many software markets. This changed the game, too, because it placed a bigger burden on software companies to maintain development of the work.

Despite the technical aspects of these solutions, at its basic, both ILS and ERM software solutions focus on managing assets (books, serials, [realia][realia], etc) so that librarians can organize and users and librarians can retrieve them. There's no requirement to use any solution offered by a library vendor, and that's the point of the Wilson (2011) article, which shows how regular software can be used to function as a homegrown solution for creating and implementing an ERM work flow.

In this week's forum, I'll introduce you to the Evergreen ILS and to the CORAL ERM solution and to its various modules and how they work. Be sure to open the transcript for this lecture in order to visit the links, especially the documentation. I ask that you log into these two services using the instructions on their sites. This will help you get some hands-on experience with them and also demystify what each do.

## References

Anderson, E. K. (2014). Chapter 4: Electronic Resource Management Systems and Related Products. Library Technology Reports, 50(3), 30–42. Retrieved from [https://journals.ala.org/index.php/ltr/article/view/4491](https://journals.ala.org/index.php/ltr/article/view/4491)

Hosburgh, N. (2016). Approaching discovery as part of a library service platform. In K. Varnum (Ed.), Exploring Discovery: The Front Door to your Library’s Licensed and Digitized Content. (pp. 15-25). Chicago, IL: ALA Editions. [https://scholarship.rollins.edu/as_facpub/138/](https://scholarship.rollins.edu/as_facpub/138/)

Miller, L. N., Sharp, D., & Jones, W. (2014). 70% and Climbing: E-Resources, Books, and Library Restructuring. Collection Management, 39(2–3), 110–126. [https://doi.org/10.1080/01462679.2014.901200](https://doi.org/10.1080/01462679.2014.901200)

Salmon, S. R. (1975). Library automation systems. New York: Marcel Dekker.

Wang, Y., & Dawes, T. A. (2012). The Next Generation Integrated Library System: A Promise Fulfilled? Information Technology and Libraries, 31(3), 76–84. [https://doi.org/10.6017/ital.v31i3.1914](https://doi.org/10.6017/ital.v31i3.1914)

Wilson, K. (2011). Beyond Library Software: New Tools for Electronic Resources Management. Serials Review, 37(4), 294–304.
[https://doi.org/10.1080/00987913.2011.10765404](https://doi.org/10.1080/00987913.2011.10765404)

[coral_modules]:http://coral-erm.org/modules/
[resources_module]:http://coral-erm.org/resources/
[licensing_module]:http://coral-erm.org/licensing/
[organizations_module]:http://coral-erm.org/organizations/
[usage_statistics]:http://coral-erm.org/usage-statistics/
[counter]:https://www.projectcounter.org/about/counter-for-libraries/
[sushi]:https://www.niso.org/standards-committees/sushi
[management_module]:http://coral-erm.org/management/
[evergreen]:http://docs.evergreen-ils.org/
[acquisitions]:http://docs.evergreen-ils.org/reorg/3.2/acquisitions/
[cataloging]:http://docs.evergreen-ils.org/reorg/3.2/cataloging/
[circulation]:http://docs.evergreen-ils.org/reorg/3.2/circulation/
[serials]:http://docs.evergreen-ils.org/reorg/3.2/serials/
[opac]:http://docs.evergreen-ils.org/reorg/3.2/opac/
[realia]:https://archives.yale.edu/subjects/33488
[hosburgh2016]:https://scholarship.rollins.edu/as_facpub/138/
