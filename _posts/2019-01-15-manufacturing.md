---
layout: post
title:  "Manufacturing"
category: engineering-notes
tags: physics engineering manufacturing
---

## Manufacturing methods

* Casting
* Forming
* Machining
* Joining

## Classifying product shapes

**Continuous** shapes are those with a profile which does not change
along its length. They are often referred to as "2D", as only two
dimensions are significant in the manufacturing
process. Mathematically, they are prisms.

**Sheet products** have an almost constant section thickness which is
small in comparison with their other dimensions. 3D sheet products are
formed from flat sheets. A bucket or much plastic furniture, for
example.

**Bulk** shapes have complex forms, often with little symmetry. They
may be solid or hollow.

## Cost of manufacturing

**Direct costs** are those such as materials and labour. They can be
_directly attributed to the production of the product_. **Indirect
costs cannot be closely linked in this way. They are often termed
"overheads" and include power, rent, machinery, insurance,
non-production salaries etc.

**Material cost** is the volume of _raw material_ (m) required per
product multiplied by the cost of material per unit mass (C).

<div class="important-note">
$$M = mC$$
</div>

**Material utilisation** shows us how much of the initial raw material
is used in the final product.

<div class="important-note">
$$mu = \frac{\text{mass of product}}{\text{mass of raw material per product}}$$
</div>

## Casting

Casting is the process of filling a mould with a fluid which then
solidifies in the shape of the mould cavity. This transition can occur
in three ways:

* The material can be heated until it melts; solidification will
  generally occur as the material cools but a chemical reaction can
  also be used.
* The material can be dissolved in a solvent; solidification will occur
  when the solvent is evaporated.
* A reaction can be caused in a liquid causing the formation of a different
  solid material.

The method chosen will depend heavily on the material being used and
may be a factor in choice of material. For example thermoplastic
polymers can be repeatedly softened by heating whereas a thermosetting
polymer decompose instead of melting at higher temperatures. Some
materials may react with oxygen and become weaker, meaning they must
be cast in inert atmospheres.

### Methods of casting

**Permanent pattern with non-permanent mould** is a process in which a
"pattern" is used to form an impression which becomes the mould
cavity. The mould is then destroyed to remove the product, but the
pattern can be reused. It is often appropriate for small-quantity
production or one-offs.

One example of this method is sand casting. Runners and risers are
used to allow the liquid to be poured in and fill with excess
fluid. Cores can be inserted to produce hollow castings. Downsides of
sand casting are the rough finish and poor suitability to small items
or details. Surface finishing is generally required and the runners
and risers must be removed.

**Pattern-free permanent mould**

A die (or mould) is used repeatedly and opened to release the cast
product.

Gravity die-casting uses a solid metal mould into which the liquid is
poured. Pressure die-casting is similar but the molten metal is
injected under pressure. This makes the process faster but increases
the likelihood of defects. It also allows smaller thicknesses which
relying on gravity alone does not.

Injection moulding is the most common process when working with
thermoplastic polymer materials. Most polymers begin to degrade before
they reach high enough temperatures to fill a mould solely under the
influence of gravity and so a screw is used to push along granules
which are melted before entering the mould. At the final stage, the
screw acts as a ram, moving axially. The high pressures straighten the
polymer's molecules, reducing its viscosity. This is known as shear
thinning.

**Expendable mould and pattern**

A pattern is made from a material with a low melting temperature, the
mould is built around it. The pattern is then melted away and the
product cast. The mould is destroyed to retrieve the casting.

One method here is investment casting, used for casting metals with a
high melting point, such as jet engine parts. A wax pattern is used,
dipped into ceramic slurry, which is built up with ceramic
particles. This is the investment process. The wax is then melted out,
giving the alternate name "lost wax process". Molten metal is then
poured into the mould, before breaking away the ceramic mould.

### Microstructure and defects

When metals cool during the casting process, grains form and dendrites
grow --- tree-like structures. These can lead to the formation of
voids, measured by the material's porosity. Often inclusions are also
found.

Many undesirable inclusions can be removed by heating the material to
below its melting point --- "dissolving" the impurities. Voids are
hard to avoid and can have catastrophic implications, but can be
reduced via the use of runners and risers with their associated
reservoirs.

When casting ingots, the process is generally not tightly controlled
as the properties of the final product are determined during later
forming stages.

## Forming

Forming is the process of shaping materials while they are solid, by
squeezing, squashing, hammering, bending or stretching. The
suitability of a material for use in a forming process is governed by
the point at which it begins to flow (governed by its yield stress)
and how much it will flow before separation occurs (governed by
ductility). A material with a low yield stress will be easier to form,
but is likely to have properties which are less desirable in a
finished product.

The yield point of a material is useful to know for these purposes. If
a stress-strain graph does not show an obvious yield point, an offset
yield point or **proof stress** is obtained by drawing a line parallel
to the linear section at 0.2% plastic strain, then taking the stress
reading. A measure of ductility is given by the strain values.

Some materials can display **work hardening**. This is when they
become harder after being strained plastically. This is caused by a
build-up of defects. These store energy. **Annealing** is a method for
altering the microstructure of a material, changing its physical
properties. It can be used to eliminate the effects of work hardening.

<div class="important-note">

All metals soften at a high <strong>homologous temperature</strong>
(<em>T</em><sub>H</sub>). This expresses a materials temperature (T)
as a fraction of its melting point (<em>T</em><sub>m</sub>).

$$T_H=\frac{T}{T_m}$$

Temperatures must be given in Kelvin, and the fraction itself has no
units.

</div>

Hot working a material (forming while at a homologous temperature over
0.6) causes there to be effectively no work hardening. This allows
high strains to be placed on the material. Conversely, cold working
(at T<sub>H</sub> &lt; 0.3) does result in work hardening.

There are three primary methods for using forming over alternative manufacturing methods:

* **Size &amp; shape:** products with one dimension significantly larger
  than their others are well-suited to forming.
* **Processing properties:** some materials are difficult to work with
  as liquids, meaning they are not easy to cast.
* **Performance properties:** microstructures created during forming are
  generally stronger than those created during casting, and can be more
  closely managed.

### Methods of forming

**Extrusion** is the process of pushing a billet of a given material
through a die using a ram. To create hollow sections a mandrel is used
in the shape of the desired hole. **Wire drawing** is a similar method
but the material is _pulled_ through a series of dies of decreasing
size. Thermoplastics are extruded in a similar way, but a screw is
used to push the polymer along and through the die.

In **rolling** a material is squeezed between two rotating. Profiled
rollers can be used to achieve a contoured shape. Progressively deeper
rollers are used for surface patterns deeper than that which can be
achieved in one pass. Metals will be easier to roll at higher
temperatures, however this generally results in an oxidised, poorly
finished surface.

**Forging** uses hammering, pressing, rolling etc, generally on a hot
metal. _Open_die_forging_ can be used for simple shapes, including
very large ones. _Closed_die_forging_ is better suited to more complex
3D bulk-solid shapes. Both these methods must then have excess
material cut away.

**Sheet forming** forms a product directly from a sheet. This could
involve bending, stretching or shearing, as well as _vacuum_forming_
plastics.

**Powder processing** methods are often used when other techniques are
not suitable, for example with ceramics. **Sintering** is a general
term for the use of heat or pressure to transform a powder into a
solid.

## Cutting

In order for a material to be cut, the cutting tool must be harder
than the material. A material's hardness can vary widely depending on
its microstructural condition.

<div class="important-note">

Hardness is often measured with a <strong>Vickers hardness
number (HV)</strong>. To find this number, a pyramid shaped diamond indents
the material with a known force, which is divided by the surface area
of the indentation. The HV is usually quoted without units.

</div>

There are three primary types of cutting-tool material:

* **Tool steels:** both the oldest and most common material for
  cutting. Alloys of iron and carbon with additions of chromium,
  tungsten or other elements.

* **Composite materials based on metal carbides:** often referred to
  as hard metals or cemented carbides, they are formed by a mixture of
  cobalt and metal carbide powders which have been sintered.

* **Ceramic** tools generally consist of aluminium oxide, sometimes
  with additions of magnesium oxide. Again, they are sintered. This
  includes diamond cutting tools.

**Hobbing** is a method of progressively cutting deeper into a
workpiece using a hob

When cutting materials it is common for temperatures to become very
high; a combination of lubrication and careful cutting tool design can
minimise this.

Not all cutting is mechanical. For example **laser cutting** melts,
burns or vaporises the material, producing a high quality finish. It
is a relatively high-cost technique. **Plasma cutting** uses a jet of
hot plasma to cut through electrically conductive materials. It is
high speed and low cost.

## Joining

There are three primary kinds of joining:

**Mechanical joining**uses fasteners. They are simple and versatile,
however do not form a seal and can cause potential weak spots as they
necessitate a hole.

**Adhesion** uses a layer of another material which solidifies to form
a joint. This includes glues and solder. Glues can be used on almost
all materials, involve low curing temperatures, do not damage
heat-sensitive materials, do not require holes, fill surface
imperfections and can be very strong over a large surface
area. However, many are not stable above 180°C, necessitate surface
preparation, can contain toxic chemicals, take longer to assemble and
have a hard to predict lifespan.

Soldering can join most metals, including dissimilar ones, requires
lower temperatures than welding which in turn reduces the likelihood
of distortion and is adaptable to automation. It is relatively weak
and is not widely applicable to other materials, however.

**Welding** aims to make a joint similar to or even indistinguishable
from the original materials. There are a variety of forms which include:

* **Solid-state welding** forces two pieces together so plastic
  deformation forms their shapes together. This includes roll bonding,
  friction welding and explosive welding.

* **Fusion welding** melts and fuses materials together, sometimes
  with the addition of a filler.

The microstructure of welds is similar to that of cast materials;
welds can, infact, be thought of as small castings.

### Surface engineering

Often, only the surface of a product requires certain attributes. In
these circumstances, it is often more practical and cost effective to
engineer the surface only.

### Additive manufacturing

Often termed 3D-printing, additive manufacturing creates items by
progressively building up material. Again, there are many
variations. Some of these are:

* **Stereolithography**, in which a UV laser causes a chemical
  reaction in a bath of resin, solidifying it. As one layer is formed,
  the resin is lowered, allowing another layer of fluid to be
  solidified on top. This process is used with specialised polymers
  and requires "scaffolding" to create "islands" of material.

* **Selective laser sintering** is a similar process, but melts and
  resolidifies a powder, and gets around the shortcomings of
  stereolithography.

* **Laminated object manufacturing** constructs products from thin
  paper sheets or wood laminates. This creates a material with
  properties like a grainless wood.

Additive manufacturing is quick, flexible and less expensive when
creating small numbers.