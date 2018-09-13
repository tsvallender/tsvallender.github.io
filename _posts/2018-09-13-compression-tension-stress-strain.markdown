---
layout: post
title:  "Compression, tension, stress and strain"
category: engineering-notes
tags: force physics engineering
---

# Compression and tension

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

![Figure 1](/img/bridge-compression-tension.png)

Ceramic materials such as stone are very strong under compressive
forces, but less strong under tensile forces. We can arrange our
materials in such a way that accounts for their strengths and
weaknesses. One technique in traditional bridge building is to use a
design which maximises the amount of material under compression and
thus also minimises the amount under tension. This can be seen at the
Pont du Gard (Figure 2).

![Figure 2](/img/pont-du-gard.jpg)

# Strain

Strain is defined as the ratio of the change in length --- i.e. the
extension --- to the original length. It is generally represented by
the lowercase Greek letter epsilon (ε), and often given as a
percentage.

<div class="important-note">$$\text{strain} = \frac{\text{extension}}{\text{original length}}
     			    = \varepsilon = \frac{\Delta l}{l _1}$$</div>

# Failure

## Fatigue

Fatigue is the tendency of a material to break when subjected to
repeated loading and unloading. Long-term effects are difficult to
predict. Analytical models can be built with a mixture of experimental
and experiential knowledge. Fatigue can cause a material to fail at
stresses much below its original strength, and is caused by the growth
of cracks over time. It is common in metals. Only recently has it been
well enough understood to be designed against.

# Stress

Stress is the force per unit area in the material, representd by the
lowercase Greek letter sigma and given by:

<div class="important-note">$$\text{stress} = \frac{\text{force}}{\text{area}}$$

$$\sigma = \frac{F}{A}$$</div>

Stress in SI unite is N m<sup>-2</sup>. This is the same as the unit
_pascal_, or Pa, used to measure pressure. As this is generally very
low it is often scaled to mm or MN.

## Strength

We can use this to give us a more specific definition of strength:

<dl>
  <dt>Tensile strength</dt>
  <dd>The maximum stress a material can withstand under tension.</dd>
  <dt>Compressive strength</dt>
  <dd>The maximum stress a material can withstand under compression.</dd>

As a material is deformed it will at some point undergo changes to its
microstructure. When this happens it will be be permanently deformed
and unable to return to its original shape. This point of no return is
termed the *yield point* and the stress needed to reach it the *yield
strength*.

# Young's modulus

*Young's modulus* is the ratio of stress divided by strain, which is a
constant for a material (that is, it does not depend on size or
shape). It measures the _stiffness of a material.

<div class="important-note">$$\text{Young's modulus} = \frac{\text{stress}}{\text{strain}}$$

$$E = \frac{\sigma}{\varepsilon}$$</div>

# Links

[Pont du Gard image](https://pixabay.com/en/pont-du-gard-aqueduct-roman-france-1739534/)