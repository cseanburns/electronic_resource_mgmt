# ERM and ILS
## Date: Thu 30 Jan 2019 

This week we will be learning about ERMs and ILS software. First off,
what are these? 

An ILS is short for an *integrated library system*. Everyone in this
class is already familiar with an ILS from, at least, a user
perspective. You use one just about anytime you use an OPAC, or an
online public access catalog, or search for a serial, or check out a
work. However, an ILS also provides an administrative interface so that
librarians may manage those processes, such as acquisitions, cataloging,
circulation, and serial and OPAC management, where such things are often
referred to as modules. You can read about these modules as they work in
the open source ILS called [Evergreen][9], by sifting through some of
Evergreen's documentation.

Thus, ILSs generally provide two separate interfaces:

- an interface to be used by librarians to manage the tasks per the
  modules
- an interface for the public to access the works of a library

An ILS is therefore, as Stephen Salmon (1975) put it, a non-traditional
way of doing traditional things, such as "acquisitions, cataloging, and
circulation." The librarians who would most often work with an ILS
include:

1. Reference -- who would use the OPAC module
2. Cataloging and Technical Services -- who would use the cataloging
   module and perhaps also the acquisitions and serials modules
3. Circulation -- who would use the circulation module
    - Interlibrary Loan department -- if such a department exists
      because the library is big enough to have one -- they would also
      use the circulation module

All of those librarians might use multiple modules of the ILS, but might
predominately use one module more often than others. For example, when I
worked at an academic library for a small college, I worked with the
Millennium ILS to check out books to users and to search for works in
the OPAC most often when I was working in reference, then used the
cataloging module most often when I was doing copy and original
cataloging. However, it really depends on the organizational structure
of a library. As our reading by Miller, Sharp, and Jones (2014) show,
the rise in electronic resources has vastly influenced how librarians
structure their organizations, whose structure is often informed by the
dictates of a "print-based world". In those structures, librarians may
either hold positions where their work is streamlined and focused on one
task, such as collections, or on multiple tasks.

With all that said, it begs the question -- what is an ERMs?

An ERMs is short for *electronic resource management system*. Its
function is born out of the need to manage digital assets and provide
users with access to those assets. An ERMs may be integrated with a
library's ILS software, but the ERM does more behind the scenes work.
Like an ILS system, an ERMS is generally divided up into various modules
that focus the librarian's work on particular duties and allow
librarians to create work flows and knowledge management systems. In an
ERMS such as the open source [CORAL system][1], the modules includes:

- [Resources][2]: this module "provides a robust database for tracking
  data related to your organization's resources ..." and "provides a
  customizable workflow tool that can be used to track, assign, and
  complete workflow tasks."
- [Licensing][3]: this module is a "flexible document management system"
  that provides options to manage licensing agreements and to automate
  parts of the process.
- [Organizations][4]: this module is a type of advanced directory that
  manages the various organizations that impact or are involved in the
  management of electronic resources, including "publishers, vendors,
  consortia, and more."
- [Usage Statistics][5]: this module provides librarians with usage
  statistics of digital assets by platform and by publisher. Supports
  COUNTER and SUSHI -- we'll cover these later in the semester, but in
  short, [COUNTER][6] "sets and maintains the standard known as the Code
  of Practice and ensures that publishers and vendors submit annually to
  a rigorous independent audit". [SUSHI][7] is a type of protocol to
  automate collecting data on usage statistics.
- [Management][8]: this module provides another type of document
  management system but this is aimed at "storing documents, such as
  policies, processes, and procedures, related to the overall management
  of electronic resources".

In our readings this week, we have three articles that speak to ILS and
ERMS as well as the relationship between the two, and an additional
article that offers some organizational context. The first reading, by
Miller, Sharp, and Jones (2014) provides some context by describing a
case study (the literature review is also helpful) that shows how
electronic resources have impacted organizational structure, job titles,
budgets, and more. The article by Anderson (2014) lists and describes
various ERMS solutions. As I mentioned in a previous lecture, electronic
resources is a fast moving area, and even though this article (or
chapter) is only four or so years old, some of the products are no
longer available or have been merged into others or sold off. Still, the
article is helpful in describing:

- the role of vendors in the ERM market
- the importance and rise of open source ERMSs as well as the mark that
  various homegrown solutions have made
- related software that plays a role, including:
    - Discovery -- federated and indexed
    - Integrated library systems
    - Interlibrary loan software
    - Link resolvers
    - Ticket management software

In the article by Wang & Dawes (2012), the authors describe the "next
generation integrated library system", which should meet a few criteria
-- including having the ability to merge ILS software with ERMS, the
latter having come into creation because of the lack of development
among ILS systems, which were stagnating and not responding to changing
work flows and work formats (i.e., electronic), at the time. But also,
around the time the article was published, more ILS and ERMS software
began moving to the cloud, as was common among many software markets.
This changed the game, too, because it places a bigger burden on
software companies to maintain development of the work.

Despite all the technical aspects of these solutions, at its very basic,
both ILS and ERM software solutions are about managing assets so that
librarians can organize and so that all can retrieve them. There's no
requirement to use any solution offered by a library vendor, and that's
the point of the Wilson (2011) article, which shows how regular software
can be used to function as a homegrown solution for creating and
implementing an ERM work flow.

In a follow up to this lecture, I'll introduce you all to the CORAL ERMs
solution and to its various modules and how they work and also to the
Evergreen ILS.

## References

Anderson, E. K. (2014). Chapter 4: Electronic Resource Management
Systems and Related Products. Library Technology Reports, 50(3), 30–42.
Retrieved from https://journals.ala.org/index.php/ltr/article/view/4491

Miller, L. N., Sharp, D., & Jones, W. (2014). 70% and Climbing:
E-Resources, Books, and Library Restructuring. Collection Management,
39(2–3), 110–126. https://doi.org/10.1080/01462679.2014.901200

Salmon, S. R. (1975). Library automation systems. New York: Marcel
Dekker.

Wang, Y., & Dawes, T. A. (2012). The Next Generation Integrated Library
System: A Promise Fulfilled? Information Technology and Libraries,
31(3), 76–84. https://doi.org/10.6017/ital.v31i3.1914

Wilson, K. (2011). Beyond Library Software: New Tools for Electronic
Resources Management. Serials Review, 37(4), 294–304.
https://doi.org/10.1080/00987913.2011.10765404

[1]:http://coral-erm.org/modules/
[2]:http://coral-erm.org/resources/
[3]:http://coral-erm.org/licensing/
[4]:http://coral-erm.org/organizations/
[5]:http://coral-erm.org/usage-statistics/
[6]:https://www.projectcounter.org/about/counter-for-libraries/
[7]:https://www.niso.org/standards-committees/sushi
[8]:http://coral-erm.org/management/
[9]:http://docs.evergreen-ils.org/
