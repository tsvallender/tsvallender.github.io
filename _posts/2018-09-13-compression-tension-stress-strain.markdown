---
layout: post
title:  "Compression, tension, stress and strain"
category: engineering-notes
tags: force physics engineering
---

## Compression and tension

Forces can be classed one of two ways --- *compressive* or
*tensile*. To put it another way, a force can either put an object
under compression or tension. Compression can be thought of as a
"squeezing" force, whereas tension might be thought of as a "pulling
apart" force. Different materials or arrangements of materials are
able to withstand different amounts of one or other types of force,
and so the types of force expected to be encountered should influence
the choice of material and the configuration that material is used in.

The two forces are not mutually exclusive. For example, imagine a gap
bridged by a sheet of material (which material is not currently
important). You walk across this makeshift bridge and as you do so it
bends (to use the technical term, it is _displaced_ under
load). Different parts of the bridge are under different types of
load. As it bends downward, the top half of the sheet is under
compressive force, being pushed together, while the bottom half is
under tension, being pulled apart (see Figure 1).

<figure>
  <img src="/img/bridge-compression-tension.png"
       alt="Tension and compression on a bridge" />
  <figcaption>Figure 1</figcaption>
</figure>

Ceramic materials such as stone are very strong under compressive
forces, but less strong under tensile forces (the tensile strength of
stone is typically 20% of its compressive strength). We can arrange
our materials in such a way that accounts for their strengths and
weaknesses. One technique in traditional bridge building is to use a
design which maximises the amount of material under compression and
thus also minimises the amount under tension. This can be seen at the
Pont du Gard (Figure 2).

<figure>
  <img src="/img/pont-du-gard.jpg"
       alt="Pont du Gard" />
  <figcaption>Figure 2</figcaption>
</figure>

## Lintels

A lintel is a horizontal beam supported by two uprights, as in the
above diagram, and they represent a good illustration of these
forces. One way of dealing with the weaknesses in tension is to use a
pre-stressed lintel. This involves embedding steel bars in the
concrete and holding them under tension while the concrete sets. This
will then constantly pull the concrete into compression and prevent
cracks moving up through the lintel.

Materials will vary in their ability to carry load. This will depend
on various factors including:

* Resistance to moving under a bending load (related to stiffness);
* Long-term resistance to load (related to creep);
* Resistance to sudden failure from shock loading (related to toughness);

In a lintel there is logically an area in the material where
compressive forces change into tensile forces. This is known as the
neutral axis or neutral plane and is an area where stress is zero as
the material is under neither compression nor tension. An implication
of this is that material can be removed from the centre of the
lintel. In actuality, significant material can be removed with only a
small reduction in performance. This led to the development of a
hollow lintel made from folded sheet steel.

## Arches

An arch is effective because it converts all the forces working on it
into compressive ones, thus working to the strengths of the material.

Structures supporting the sides of arches are termed
_abutments_. These could be walls, earthen banks or other arches. A
"half-arch" used as an abutment is known as a _flying buttress_.

A Roman arch is formed of wedge-shaped stones (voussoirs) that support
each other. The central stone --- the keystone --- stabilises the
whole arch when inserted. They are semicircular and so have a high
width when tall. Gothic arches removed this limitation, when it was
discovered that an arch with a point allowed the height to be greater
than half the width.

In terms of supporting forces one of the most efficient shapes is the
catenary or very similar parabola. A catenary is the shape a chain or
rope naturally assumes when supported at each end.

## Strain

Strain is defined as the ratio of the change in length --- i.e. the
extension --- to the original length. It is generally represented by
the lowercase Greek letter epsilon (ε), and often given as a
percentage.

<div class="important-note">$$\varepsilon = \text{strain} = \frac{\text{extension}}{\text{original length}}
     			    = \varepsilon = \frac{\Delta l}{l _1}$$</div>

## Failure

### Fatigue

Fatigue is the tendency of a material to break when subjected to
repeated loading and unloading. Long-term effects are difficult to
predict. Analytical models can be built with a mixture of experimental
and experiential knowledge. Fatigue can cause a material to fail at
stresses much below its original strength, and is caused by the growth
of cracks over time. It is common in metals. Only recently has it been
well enough understood to be designed against.

## Stress

Stress is the force per unit area in the material, representd by the
lowercase Greek letter sigma and given by:

<div class="important-note">$$\text{stress} = \frac{\text{force}}{\text{area}}$$

$$\sigma = \frac{F}{A}$$</div>

Stress in SI unite is N m<sup>-2</sup>. This is the same as the unit
_pascal_, or Pa, used to measure pressure. As this is generally very
low it is often scaled to mm or MN.

### Strength

We can use this to give us a more specific definition of strength:

<dl>
  <dt>Tensile strength</dt>
  <dd>The maximum stress a material can withstand under tension.</dd>
  <dt>Compressive strength</dt>
  <dd>The maximum stress a material can withstand under compression.</dd>
</dl>

As a material is deformed it will at some point undergo changes to its
microstructure. When this happens it will be be permanently deformed
and unable to return to its original shape. This point of no return is
termed the *yield point* and the stress needed to reach it the *yield
strength*.

## Young's modulus

*Young's modulus* is the ratio of stress divided by strain, which is a
constant for a material (that is, it does not depend on size or
shape). It measures the _stiffness_ of a material.

<div class="important-note">$$\text{Young's modulus} = \frac{\text{stress}}{\text{strain}}$$

$$E = \frac{\sigma}{\varepsilon}$$</div>

## Links

[Pont du Gard image](https://pixabay.com/en/pont-du-gard-aqueduct-roman-france-1739534/)