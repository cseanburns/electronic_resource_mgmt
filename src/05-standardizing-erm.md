# Standardizing Electronic Resource Management

By the end of this lecture, you should be able to:

1. **Understand the importance of standardization**: Recognize how standardization in processes and technologies, such as those pioneered by Ralph Parker, improves library operations and supports automation.
2. **Identify key systems for managing electronic resources**: Explore the systems used for electronic resource management (ERM) and how they facilitate standardization and efficiency in library workflows.
3. **Explain the historical context of library automation**: Relate historical advancements in library automation, such as the use of punched cards, to modern electronic resource management practices.
4. **Analyze the role of organizations like NISO**: Understand how the National Information Standards Organization (NISO) develops standards that impact libraries, including those related to bibliographic information, indexing, and electronic resources.
5. **Explore TERMS as a framework for ERM**: Examine the *Techniques for Electronic Resource Management* (TERMS) as a guide for managing electronic resources, focusing on the different stages of the ERM life cycle.
6. **Apply standardization principles to real-world ERM**: Apply the concepts of standardization and workflows to practical scenarios, using systems like Coral or Folio to facilitate efficient ERM in libraries.

## Introduction

Awhile ago now, I conducted some historical research on a librarian named Ralph Parker.
Inspired by technological advances in automation, specifically the use of punched cards and machines, Parker began to apply this technology to library circulation processes in the 1930s.
He thus became one of the first people to automate part of the library's workflow.
By the mid-1960s, Parker's decades long pursuit of library automation led to some major advances, including the founding of [OCLC][oclc].
Meanwhile, the punched card system he continued to develop eventually led to massive increases in circulation and better service to patrons.
In the mid-60s he wrote the following about the installation and launch of a new punched card system to help automate circulation:

> "To the delight of the patrons it requires only four seconds to check out materials" (as cited in [Burns, 2014][burns2014]).

I think about that quote often.
When I read that in his annual report in the archives at the University of Missouri, I could feel his giddiness.
Until this achievement, borrowing from the library involved completing multiple forms to be sure that accurate records were kept.
Accurate record keeping is important.
Libraries need to protect their collections but also provide access to them, and this is not possible without accuracy.
As stated (almost callously) in [Flexner (1927)][flexner1927]:

> it is necessary that the library have control of these circulating books in several ways.
> It [the library] must know where they are, it must lay down rules to see that thoughtless people do not retain the books in their possession unfairly, and > it must provide means for securing their prompt return.
> These and many other considerations combine to make it necessary for the [circulation] department to install and maintain very efficient methods to control the circulation of books, which
> are commonly known as routines (p. 6).

What were those routines in the 1930s?
Why was Parker so excited about his system taking only four seconds to check out a work?

Well, two routines are important for circulation. The first involves membership and the second involves charging or checking out works.

## Routines

### Membership

First, if the patron was not yet a member of a library, then they had to register to become one.
The first routine was to check their membership and register them as borrowers if they were not yet a member or if their membership had expired.
If this was a public library, then the process varied depending if the member was an adult or a youth (or *juveniles* in the lingo of the time).
This routine involved completing an application card, creating and filing a member record, and issuing the borrower a card of their own, i.e., their **borrower's card**.

### Charging

Once membership status was confirmed or created, then the circulation librarian employed a system to **charge** books to the borrower.
Librarians had developed a variety of manual charging systems.
These included the **ledger system**, the **dummy system**, the **temporary slip system**, the **permanent slip or card system**, the **Browne system**, and
eventually the [Newark charging system][newark] (see [Flexner, 1927, pp. 73-82 for details][flexner1927]).
By the early twentieth century, use of the Newark charging system had become widespread among American public libraries.
Assuming the librarian in the 1930s used the Newark system, the librarian entered the details on a "book card, a date slip and a book pocket for each book" (Flexner, 1927, p. 78).
Flexner goes on to outline the process:

> The date slip is pasted opposite the pocket at the back of the book.
> The date which indicates when the book is due to be returned or when issued is stamped on each of three records, the reader's card, the book card and the date slip.
> The borrower's number is copied opposite the date on the book card.
> The date on the date slip indicates at once the file in which the book card is to be found, and
> the [librarian] assistant is able to discharge the book and release the borrower immediately on the return of the volume (Flexner, 1927, pp. 78-79).

In essence, charging books or works to patrons involved a lot of paperwork, and you can imagine that it might be prone to error.
However, the number of charging systems then and the discussions and debates around them show that the processes and routines were steadily becoming standardized, even if only by convention.
What is important to know is that standardization is a necessary pre-requisite to automation.
This is because standards provide models of abstraction, and these models can be adapted to new technologies.
In this case, the charging system linked three things that a computerized circulation system would later represent electronically: the borrower, the item, and the loan transaction.

Parker's achievement in automation improved the library experience for patrons and librarians at the circulation desk.
Similarly, today's electronic resource management systems rely on standardized processes and workflows to ensure libraries can efficiently manage resources and serve patrons,
much like Parker's early automation work with circulation.
This work also indirectly improved processes throughout the library.
Once circulation standards stabilized and technology like punched cards became available, then it became possible to automate other library processes.
And this was good; the effects were that automation increased circulation and that an automated circulation process [Saved The Time Of The Reader][ranganathan], *down to four seconds to be exact!*

> The process of "mechanizing" the circulation system has a much more complicated and roundabout history than I make it out above, which is usually the case.
> For more insight, see [American Library Association (2012)][ala2012].

This is all to say that standards and technology go hand and hand and that the details matter when thinking about standards.
How does this relationship work?
How are standards developed?

## Standardization

The process of articulating and developing standards is generally accomplished through various standards making bodies.
These bodies gather relevant stakeholders, often those with competing interests, together to work out the details.
When this process works well, multiple parties receive payoffs at the expense of any single party acquiring a monopoly.
This is true for the design of screwdrivers, the width of railroad tracks, the temperature scale, and it is certainly true for how information is managed and exchanged.
The internet and the web wouldn't exist or definitely not exist as we know it if not for the standardization of the
Internet Protocol (IP), the Transmission Control Protocol (TCP), the Hypertext Transfer Protocol (HTTP), and other internet and web related technologies.
These and other standards enable the internet and the web to work for users regardless of the operating system and the hardware they use.

It is worth pointing out that there are broadly two types of standards: *de facto/conventional standards* and *formal (de jure) standards*.
That is, not every standard is formally standardized.
These are technologies, formats, practices, or products that are standard because they are widely adopted and because of that, our use of them is widely expected.
For example, Microsoft Word can be considered a de facto standard for word processing simply because it is widely adopted and because people widely expect us to use it,
even though no standards organization has declared Word itself to be *the* standard word processor.
Still, this conventional adoption of Word as the standard word processor has had major effects on how we store, transmit, and communicate information.

Other standards are *formal (or de jure)* standards.
These types of standards are developed, documented, and maintained through an established standardization process.
The DOCX format, as an example, that Microsoft Word defaults to, is based on the Office Open XML file format, which is formally standardized as [ISO/IEC 29500-1:2016][iso29500].
Organizations that develop or maintain formal standards that are relevant to libraries, information science, and information technology include the
National Information Standards Organization (NISO), the International Organization for Standardization (ISO), the International Electrotechnical Commission (IEC),
the American National Standards Institute (ANSI), the Internet Engineering Task Force (IETF), and the World Wide Web Consortium (W3C).

Formal and conventional standards often interact, such as the Microsoft Word and the DOCX case.
This is because widespread adoption and practice can (but may not) eventually become formally standardized.
Although, there are other paths to standardization.
For example, the competing LibreOffice Word Processor format, ODF (Open Document Format), is also standardized even if it is not as widely adopted (see [ISO/IEC 29166:2011](iso29166)).

### NISO (Formal Standards)

[Harris (2006)][harris2006] covers the basic reasons for the existence of [NISO][niso] (the *National Information Standards Organization*) and the kinds of standards NISO is responsible for maintaining and creating.
These standards are directly related to libraries and fall under [three broad categories][niso2].
They deal with **Information Creation &amp; Curation**, **Information Discovery &amp; Interchange**, and **Information Policy &amp; Analysis**.
There are standards that touch on bibliographic information, indexing, abstracting, controlled vocabularies, and other library important issues.

To fulfill its mission and to remain transparent about the pipeline through which practices follow in their path to becoming standards, if they do,
NISO publishes [five main types of documents][doctypes_niso]: primers, white papers, technical reports, recommended practices, and standards.
**Primers** introduce or explain a topic, and they provide readers with enough background to understand an issue, technology, or an area of practice.
**White papers** explore emerging issues and also articulate positions, identify problems or opportunities, and may establish if an area is ready for subsequent standardization.
**Technical reports** provide detailed, descriptive information about a technical topic but do not necessarily provide a recommendation that a community follow a particular practice.
**Recommended practices** document guidelines or best practices that NISO encourages organizations to adopt.
However, their provisions remain discretionary and can be adapted to local circumstances.
**Standards** are the most formal type of publication and establish consensus-based specifications, requirements, or procedures through NISO's ANSI-accredited standards-development process.
These five publication types thus represent different purposes: education, explore, describe, recommend, or standardize.

- Primer, example: [Understanding Metadata: What is Metadata, and What is it For?: A Primer][metadata_primer]
- White Paper, example: [Making Good on the Promise of ERM: A Standards and Best Practices Discussion Paper][erm_whitepaper]
- Technical Report, example: [NISO TR-06-2017, Issues in Vocabulary Management][vocab_tr]
- Recommended Practice, example: [NISO RP-9-2026, KBART: Knowledge Bases and Related Tools Recommended Practice][kbart_rp]
- Standards, example: [ANSI/NISO Z39.96-2024, JATS: Journal Article Tag Suite, version 1.4][jat_standard]

It should be noted that NISO is not an enforcement agency and thus there is no legal requirement that any vendor or other stakeholder implement any standard.
Standards, rather, acquire force through adoption, interoperability, and market pressure.
If libraries and other vendors expect a product to support a particular standard, then failing to implement it may make the product more difficult or expensive to integrate with other systems, and
ergo make the product less attractive to libraries.
Libraries may also require support for particular standards when evaluating products, writing requests for proposals (RFPs), or negotiating contracts.

NISO also provides some mechanisms for demonstrating compliance.
For example, content providers can have their KBART files evaluated and publicly identified as KBART compliant (see [KBART Compliance, Gold or Silver levels][kbart_compliance]).
Essentially, the consequences for ignoring a standard do not entail fines or formal penalties but dissatisfied customers (libraries), additional development costs, interoperability problems, competitive disadvantages, and perhaps loss of business.
The key is thus collective action, which means a voluntary standard becomes difficult to ignore once enough participants in an industry depend on it.
And this is one reason why creating these standards, in the first place, involves [stakeholders throughout the industry][members_niso].

### TERMS (Conventional Standards)

We also are not simply interested in formal standards that deal with the processes used to catalog and charge a book, to create member records, and to draw up licenses for an electronic resources.
We are also interested in standardizing, as Flexner (1927) would say, "routines," processes, or workflows.
One such example is TERMS, or *Techniques for Electronic Resource Management* ([Emery &amp; Stone, 2013][terms1]).

TERMS is not a true standard but a *de facto* or conventional standard (or framework) that helps outline the electronic resource management workflow.
For example, [Hosburgh, 2014][hosburgh2014]) used the framework to create a checklist for managing e-resources.
Emery and Stone (2013) developed it to address the growing complexities of managing electronic records, where varying workflows, inconsistent processes,
and a lack of standardization were creating inefficiencies for libraries trying to provide access to digital content.
Version 1 of TERMS is described by the TERMS authors in an issue of [Library Technology Reports][terms1], although it has been replaced by a [newer version][terms2],
version 1 functions as a thorough introduction to the ERM workflow and provides guidance and suggestions on electronic resource management.
For example, in [chapter 7][chapter7] on TERMS version 1, the authors provide information on the importance of working with providers or vendors in case of cancellation of a resource.
They write:

> Do not burn any bridges! Many resources have postcancellation access, which means you need to keep up a working relationship with suppliers;
> this might also incur a platform access fee going forward, so this needs to be budgeted for in future years.
> Review the license to fully understand what your postcancellation rights to access may be.
> In addition, you may resubscribe to the resources in future years. Content is bought and sold by publishers and vendors.
> Therefore, you may end up back with your original vendor a year or two down the line!

Some of this material is repeated in version 2 of TERMS, but version 2 was created to include more input from the community, and thus reflects a slightly modified outline.
The specific parts [include][termsV2]:

1. Investigating new content for purchase or addition
1. Acquiring new content
1. Implementation
1. Ongoing evaluation and access, and annual review
1. Cancellation and replacement review
1. Preservation

They also write about this new version:

> In addition to the works mentioned or cited in the original TERMS report, much has been written in the past few years that can help the overwhelmed or
> incoming electronic resources librarian manage their daily workflow.
> In the end, however, most of the challenges facing the management of electronic resources is directly related to workflow management.
> How we manage these challenging or complex resources is more important than what we do, because how we do it informs how successful and how meaningful the work is, and
> how well it completes our goal of getting access to patrons who want to use these resources ([Terms 2, Introduction][termsV2]).

As such, the outline and the content described in these two versions of TERMS is centered on the ERM workflow.

In the end, TERMS is a guide and framework for thinking on the different aspects of the electronic resource life-cycle within the library.
For example, let's consider Term item 1, which is to investigate new content for purchase or addition.
In a presentation by the [Emery and Stone (2014)][emery2014], they suggest that this involves the following steps, partly paraphrased:

- outline what you want to achieve
- create a specification document
- assemble the right team
- review the market and literature and set up trial
- speak with suppliers and vendors
- make a decision (Emery and Stone, slide 12, 2014)

Emery and Stone (2014) provide other examples, and the TERMS listed in this slide are from the first version.
TERM no. 6, PRESERVATION, was added in version 2, and TERMS nos. 4 and 5 from version 1 were joined together.

## Conclusion

Standards are easy to overlook because the successful ones tend to become invisible or disappear into the technologies and routines we use.
Yet much of what librarians do depends on shared expectations about how information should be represented, exchanged, and managed.
These expectations are often expressed through formal standards, such as those developed by NISO or related organizations, or
through conventional standards, frameworks, and practices that become widely adopted because communities find them useful.
In both cases, standards make it possible for people and organizations coordinate their work through the technologies (in the broadest sense possible) we use.

The history of circulation provides a useful illustration.
The Newark charging system standardized (conventionally) a routine by identifying the important entities and relationships in circulation: a borrower, an item, and a transaction that linked the two.
Parker's punched-card system could automate circulation because much of the underlying intellectual work had already been done.
So even though the technology changed dramatically, the basic model did not.
The principle is this: standardization made the routine abstract enough that it could be transferred from one technology to another.

Electronic resource management presents the same problem, even if on a much larger scale.
Libraries, publishers, and vendors must use technologies, practices, and products to exchange information and coordinate activities across organizational and technological boundaries.
Formal standards and recommended practices developed through NISO help establish common expectations for some of these interactions.
Frameworks such as TERMS, on the other hand, help standardize how librarians conceptualize the e-resource lifecycle itself.
That includes everything from investigating and acquiring a resource through implementation, evaluation, cancellation, and preservation.

Standards therefore should not be understood simply as rules that organizations are required to follow.
As stated, many of the standards, formal or conventional, discussed here are voluntary, and conventional standards especially have no formal authority at all.
Their power comes from collective adoption.
As more participants organize their systems and workflows around a shared standard, interoperability (ideally) becomes easier and the costs of ignoring the standard increase.

In the end, e-resource management is not simply about learning particularly products or performing a collection of tasks.
It is about managing a network of standardized representations, relationships, exchanges, and workflows.
The specific technologies will continue to change (i.e., constant disruption), just as punched cards gave way to computerized circulation systems.
Therefore, it is far more important to understand the standards and abstractions beneath these technologies.
Doing so provides a more long-lasting and durable way of understanding how e-resource management works.

## References

Breeding, M. (2015).
*Library Technology Reports, 51*(4). Chapters 1-5. 
[https://journals.ala.org/index.php/ltr/issue/view/509][breeding2015]

Burns, C. S. (2014).
Academic libraries and automation: A historical reflection on Ralph Halstead Parker.
*Portal: Libraries and the Academy, 14*(1), 87–102.
[https://doi.org/10.1353/pla.2013.0051][burns2014], or:
[http://uknowledge.uky.edu/slis_facpub/6/][burns2014OA]

Emery, J., & Stone, G. (2013).
*Library Technology Reports, 49*(2). Chapters 1-8.
[https://journals.ala.org/index.php/ltr/issue/view/192][terms1]

Emery, J., & Stone, G. (2014, July).
Techniques for Electronic Resource Management (TERMS): From Coping to Best Practices [Conference].
2014 AALL Annual Meeting and Conference, Henry B. Gonzalez Convention Center San Antonio, TX.
[http://eprints.hud.ac.uk/id/eprint/19420/][emery2014]

Emery, J., & Stone, G. (2017, March 17).
Announcing TERMS ver2.0. TERMS: Techniques for electronic resource management.
[https://library.hud.ac.uk/archive/projects/terms/announcing-terms-ver2-0/][termsV2]

Flexner, J. M. (1927).
*Circulation Work in Public Libraries*. American Library Association.
[https://hdl.handle.net/2027/mdp.39015027387052][flexner1927]

Harris, P. (2006).
Library-vendor relations in the world of information standards.
*Journal of Library Administration, 44*(3–4), 127–136.
[https://doi.org/10.1300/J111v44n03_11][harris2006]

Hosburgh, N. (2014).
Managing the electronic resources lifecycle: Creating a comprehensive checklist using techniques for electronic resource management (TERMS).
*The Serials Librarian, 66*(1–4), 212–219.
[https://doi.org/10.1080/0361526X.2014.880028][hosburgh2014]

[ala2012]:https://www.ala.org/tools/circulation
[burns2014]:https://doi.org/10.1353/pla.2013.0051
[burns2014OA]:http://uknowledge.uky.edu/slis_facpub/6/
[chapter7]:https://journals.ala.org/index.php/ltr/article/view/4738/5647
[doctypes_niso]:https://www.niso.org/explore/type?type=All
[emery2014]:http://eprints.hud.ac.uk/id/eprint/19420/
[erm_whitepaper]:https://www.niso.org/publications/making-good-promise-erm-standards-and-best-practices-discussion-paper
[flexner1927]:https://hdl.handle.net/2027/mdp.39015027387052
[harris2006]:https://doi.org/10.1300/J111v44n03_11
[hosburgh2014]:https://doi.org/10.1080/0361526X.2014.880028
[iso29166]:https://www.iso.org/standard/45245.html
[iso29500]:https://www.iso.org/standard/71691.html
[jat_standard]:https://www.niso.org/publications/z3996-2024-jats
[kbart_compliance]:https://www.niso.org/standards-committees/kbart/kbart-compliance
[kbart_rp]:https://www.niso.org/publications/rp-9-2026-kbart
[members_niso]:https://www.niso.org/what-we-do/directory/member-organizations
[metadata_primer]:https://www.niso.org/publications/understanding-metadata-2017
[newark]:https://www.merriam-webster.com/dictionary/Newark%20charging%20system
[niso2]:https://www.niso.org/welcome-to-niso
[niso]:http://www.niso.org/
[oclc]:https://www.oclc.org/
[ranganathan]:https://en.wikipedia.org/wiki/S._R._Ranganathan
[terms1]:https://journals.ala.org/index.php/ltr/issue/view/192
[terms2]:http://6terms.tumblr.com/
[termsV2]:https://library.hud.ac.uk/archive/projects/terms/announcing-terms-ver2-0/
[vocab_tr]:https://www.niso.org/publications/tr-06-2017-issues-vocabulary-management
