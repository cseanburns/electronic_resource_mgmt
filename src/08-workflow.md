# Workflow
  
By the end of this section, you should be able to:

1. **Understanding Workflows**: Workflows play a central role in electronic resource management (ERM), helping to integrate tools and systems while addressing the complexities of managing electronic resources in libraries.
2. **Interoperability and Standards**: Effective ERM depends on the ability of systems to communicate with each other. Standards like CORE, COUNTER, and SUSHI are essential for ensuring interoperability between systems, such as integrated library systems (ILS) and ERM software.
3. **Economic Realities of ERM**: The financial aspects of managing electronic resources, including acquisitions, subscriptions, and vendor relations, are critical. These challenges have only been exacerbated by the COVID-19 pandemic, making workflow-based standards even more important.
4. **Customization and Flexibility**: ERM solutions must be flexible and customizable to meet the unique workflow needs of individual libraries. This makes understanding workflow analysis crucial for selecting the right systems.
5. **Ongoing Learning**: The readings emphasize the evolving nature of electronic resource management and highlight the importance of continuously engaging with standards, technologies, and best practices to manage the complexities of modern librarianship.

## Introduction

We now shift our focus to the centrality of **workflows** in electronic resource management.
A **workflow** refers to a series of organized steps or tasks that are followed to complete a specific process.
In the context of electronic resource management (ERM), workflows involve the systematic coordination of tools, systems, and people
to manage the selection, acquistion, access, and maintenance of electronic resources such as databases, e-books, and journals.
Effective ERM workflows ensure that these resources are seamlessly integrated into library systems like
integrated library systems (ILS) and library service platforms (LSP).
At the same time, they also address challenges related to licensing, budgeting, usage tracking, and troubleshooting.
In short, workflows provide a framework for streamlining processes, enhancing efficiency, and ensuring that library users can
access resources without disruption.

Before we proceed, let's recap our prior work.
In the the preceeding sections, we learned about:

* what it means to be a librarian who oversees or is a part of electronic resource management,
* what kinds of criteria are sought for in new hires, and
* why electronic resources have introduced so much *constant disruption* across libraries.

Among other things, this latter point is largely due to the fact that the print-era largely involved (or at least more so)
a linear process of collection management and information use that was fundamentally altered with the introduction of electronic resources.

Then we learned about the functions and modules offered by:

* electronic resource management software,
* integrated library system software, and
* library service platforms.

To understand those systems better, we learned about standards, technical reports, and recommended best practices
by studying documents prepared by NISO and its members, and component technologies such as:

- OpenURL link resolvers
- Access and authentication technologies:
    - EZProxy
    - OpenAthens

We also learned about:

* technical and workflow standards

And we learned:

* why standards are important, whether they are technical or address workflows,
* why interoperability is required, and
* what happens when access to electronic resources break.

## Readings

Our readings in this section provide foundational insights into the complex workflows involved in electronic resource management (ERM).
These articles guide us through key concepts like knowledge bases, workflow-based standards, and the challenges of integrating
electronic resources into library systems.
The readings show how libraries navigate the technical and financial aspects of managing electronic resources and
contextualize topics on licensing, budgeting, and systems interoperability.

The first [Anderson article (chapter 2)][anderson2014a] helps us understand the role of knowledge bases in ER management,
particularly how they function alongside integrated library systems (ILS), then later as separate ERM systems, and finally as modules in ILSes.
This latter development resulted in the development of library service platforms (LSPs).

Anderson frames resource management by discussing five parts: knowledge bases, budgets, administration, licensing, and reports.
It outlines the challenges these systems face for these parts to work together.
The article also introduces emerging concepts like licensing, COUNTER, and SUSHI, which are topics that will be explored more thoroughly later.

> An ERM **knowledge base (KB)** contains a repository of structured information about library holdings.
> Multiple KBs exist and are used to facilitate the management and access of electronic resources.
> They typically include metadata about electronic journals, databases, e-books, and other digital assets that librarians manage.
> The most basic KB should contain metadata about inventory information or holdings data such as:
> publication title, identifiers like ISSNs for serials, ISBNs for monographs, etc.
> But KBs are also used to manage catalog data, link resolver data, interlibrary loans, subscription information, and more.
> There are several KB products, but as an example, see [GOKb Global Open Knolwedge Base][gokb])
> and a list of publications about this open source product: [GOKb Publications][gokb_pubs].

In [Anderson's second article (chapter 3)][anderson2014b],
the emphasis shifts to the importance of analyzing a library's workflow before selecting ERM software.
Anderson underscores that workflow-based standards, even if they are not true technical standards,
are important due to the diverse operational needs of libraries.
Anderson's article invites us to think critically about how different libraries may prioritize distinct aspects of the ERM process.
This article should help you draw connections to [Samples and Healy][samples2014] and their discussion of proactive versus reactive troubleshooting.

These two readings highlight the financial pressures inherent in ERM, particularly regarding acquisitions, budgets, subscriptions, and purchasing,
as discussed in Anderson's paper on the [Elements of Electronic Resource Management][anderson2014a]
and in the multiple discussions about the role vendors play in electronic resource management.
The market and the economics of this area of librarianship weigh heavily on everyday realities.

We will follow up on this in the next section when we will read about the market and the economics of electronic resources.
For example, in both Anderson readings, we learn about the CORE recommended practice (RP), or the [Cost of Resource Exchange][cost_exchange],
developed by NISO.
CORE brings together three aspects of our previous discussions: software, funds, and interoperability.
The *CORE RP* describes how ILS and ERM systems communicate the costs of electronic resources between each other.
Its existence hints at the pressures librarians have had in dealing with complex budget issues.
Although these articles were published before the pandemic, the pandemic continues to make these issues more complicated for libraries.

While we spent time discussing technical standards, we also learn about [TERMS][terms2].
This is an attempt to standardize the language and processes involved with electronic resource management.
Aside from the CORE standard, we learn about standardizing attempts at licensing, which includes the *COUNTER* and *SUSHI*
usage-related standards that outline the communication, collection, presentation, and the formatting of usage statistics for electronic resources
such as ebooks, journals, databases, and more.

We have discussed interoperability and what it takes for multiple systems to connect and transfer data between each other.
We primarily discussed this with respect to link resolver technology.
We did this not just because we should know about link resolvers as important components of electronic resource management,
but also because link resolvers are a good example of the kind of work that is involved for systems to communicate properly.
There are other forms of interoperability, though.
Coming back to [CORE][cost_exchange] again, the [Anderson article (chapter 2)][anderson2014b]
provides a link to a [white paper][medeiros2008] on the interoperability of acquisitions modules
between integrated library systems and electronic resource management systems.
This paper defines 13 data elements that were determined to be desired in any exchange between ILS software and ERM software.
These data elements enable these software systems to communicate usefully with each other.
By that, I mean, the data points enable meaningful use of both the ILS software and the ERM software, and include:

* purchase order number
* price
* start/end dates
* vendor
* vendor ID
* invoice number
* fund code
* invoice date
* selector
* vendor contact information
* purchase order note
* line item note
* invoice note (Medeiros, 2008).

That white paper contains examples and worthwhile use cases and stories from major libraries, and these cases are helpful reads.
The paper provides a sense of how standards are created through a process of comparing, contrasting, and coordinating needs and
contexts among different entities.

These Anderson readings are great because they illustrate the whole ERM process.
If you are able, visit the journal issue for these two readings and read the other chapters that Anderson has written,
but in particular, the [Electronic Resource Management Systems and Related Products][anderson2014c].

In short, this section's topic provides a foundation for the remaining topics we study.
In particular, they will help frame what we learn when we study the markets and economics
of the electronic resource industry, the process of licensing and negotiation, and about the evaluation and statistics of usage.
Think of this section as a foundation, a transition between, and a reflection on all we have studied thus far, and what we will study going forward.

## Conclusion

In this section, we explored the workflows that are central to electronic resource management.
We continued to learn about the importance of standards, interoperability, and we began to gain insight into the financial pressures that libraries face.
The readings also provided insight into how systems like ILSes and ERMSes must work together and will help further our upcoming discussions
about market dynamics, licensing processes, and the evaluation of resource usage.
By understanding their centrality and the basic challenges in developing them,
you will be better equipped to manage electronic resources more effectively in real-world library settings.

## Readings / References

Anderson, E. K. (2014).
Chapter 2: Elements of electronic resource management.
*Library Technology Reports, 50*(3).
[https://journals.ala.org/index.php/ltr/article/view/4492/5257][anderson2014a]

Anderson, E. K. (2014).
Chapter 3: Workflow analysis.
*Library Technology Reports, 50*(3).
[https://journals.ala.org/index.php/ltr/article/view/4493/5259][anderson2014b]

## Additional References

Anderson, E. K. (2014).
Chapter 4: Electronic resource management systems and related products.
*Library Technology Reports, 50*(3).
[https://journals.ala.org/index.php/ltr/article/view/4491][anderson2014c]

CORE Standing Committee (NISO). (2010).
CORE: Cost of Resource Exchange.
[https://www.niso.org/standards-committees/core-cost-resource-exchange][cost_exchange]

Medeiros, N., Miller, L., Chandler, A., & Riggio, A. (2008).
White Paper on Interoperability between Acquisitions Modules of Integrated Library Systems and Electronic Resource Management Systems (p. 28)
[White Paper]. Library of Congress.
[https://old.diglib.org/standards/ERMI_Interop_Report_20080108.pdf][medeiros2008]

Samples, J., & Healy, C. (2014).
Making it look easy: Maintaining the magic of access. *Serials Review, 40*, 105-117.
[https://doi.org/10.1080/00987913.2014.929483][samples2014]

[anderson2014a]:https://journals.ala.org/index.php/ltr/article/view/4492/5257
[anderson2014b]:https://journals.ala.org/index.php/ltr/article/view/4493/5259
[anderson2014c]:https://journals.ala.org/index.php/ltr/article/view/4491/5255
[cost_exchange]:https://www.niso.org/standards-committees/core-cost-resource-exchange
[medeiros2008]:https://old.diglib.org/standards/ERMI_Interop_Report_20080108.pdf
[samples2014]:https://doi.org/10.1080/00987913.2014.929483
[terms2]:http://6terms.tumblr.com/
[gokb]:https://gokb.org/index.html
[gokb_pubs]:https://gokb.org/publications.html
