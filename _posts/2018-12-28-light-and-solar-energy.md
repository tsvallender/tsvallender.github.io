---
layout: post
title:  "Light and solar energy"
category: engineering-notes
tags: physics engineering
---

## Light and other waves

There are two basic types of wave: **transverse waves**, such as all
electromagnetic waves and those in fluids; and **longitudinal waves**,
such as sound waves. In the former, vibrations of the waves are at
right angles with the movement of the wave itself; in the latter they
are in the same direction.

All electromagnetic waves travel at the speed of light, which is
2.998×10<sup>8</sup> m s<sup>-1</sup> in a vacuum.

Light can be thought of as made up of discrete bundles of energy
called **photons** that travel as electromagnetic waves.

### Properties of a wave

**Wavelength** (λ) is the distance between two consecutive peak
values, measured in metres.

**Period** (_T_) is the time interval between two consecutive peak
values, measured in seconds.

**Frequency** (_f_) is the reciprocal of the period, the number of
cycles per second, measured in Hz.

**Amplitude** (_A_) is the maximum value of the varying quality, where
units will depend upon the wave's nature.

<div class="important-note">
$$\text{wavelength} \times \text{frequency} = \text{speed}$$

For electromagnetic radiation this is written $$c = \lambda f$$ where
_c_ is the speed of light.

The energy carried by a photon is proportional to its frequency and is given by

$$E = fh$$

where h is Planck's constant and equal to 6.626×10<sup>-34</sup> J
s. This equation provides a link between the wave or photon models of
describing light.  </div>

The colour of visible light depends upon its wavelength (or
frequency). Its intensity is determined by its amplitude and related
to the energy carried. The light's wavelength is dependent upon the
temperature of the source, with a high temperature, such as the sun,
leading to a low wavelength.

### Reflection

**Specular reflection** is how light reflects from a smooth surface,
such as a polished mirror or still water. This is when the majority of
rays are reflected at the _same angle_. **Diffuse reflection** is how
light reflects from a rougher surface, when rays are _scattered in
many directions_.

<div class="important-note">
The laws of reflection of light state:
<ol>
<li>The angle of incidence is equal to the angle of reflection.</li>
<li>The angles of incidence and reflection and the normal to the surface
are all in the same plane.</li>
</ol>
</div>

## Generating power

Energy can be produced directly from sunlight by heating water in
"solar thermal" arrangements in which it heats the air in "Trombe
wall" cavities. This is an example of _passive_ solar
heating. _Active_ solar heating uses thermal energy to heat water
either directly or via a heat exchanger.

In order to generate electricity, photovoltaic (PV) panels are used. A
group wired together is known as a **solar array**. PV technology has
a number of benefits, which include:

* Direct generation of electricity;
* Practical on both the small and large scales;
* Suitable in both urban and rural locations;
* Silent;
* Low-maintenance;

Its drawbacks include:

* May be insufficient during periods of low sunlight;
* Due to governmental financial incentives, its true economic viability
  is potentially unknown;
* "Solar farms" can be opposed on grounds of visual intrusion.

The amount of solar energy reaching the Earth's surface is measured in
kWh m<sup>-2</sup> day<sup>-1</sup>, also known as **solar flux**. The
amount a given location will receive can be quite reliably predicted
based on historical data. Even diffuse daylight can add a significant
fraction to energy levels, especially in temperate climates such as
the UK.

<div class="important-note">
The energy of a photon, _E_, is given by:

$$E = \frac{1.24}{\lambda} eV$$

where λ has units of μm and is the wavelength associated with the
photon. The electron volt, eV, is the amount of energy transferred
when an electron moves through a p.d. of 1 V. It is a convenient unit
for measuring small quantities of energy.
</div>

The proportion of photons with different energies determines the
characteristics and colour of the light. The spectrum of sunlight just
outside the Earth's atmosphere is referred to as air mass zero ---
AM0. On the Earth's surface, when the Sun is at its zenith the path is
shortest. This is AM1. Air mass numbers are given by the ratio of path
length to overhead path length, or $$\frac{1}{\cos{\theta}}$$ where θ
is the angle between the sun and the zenith.

The **solar constant** is the energy from sunlight, in terms of photon
energy per second reaching 1 m<sup>2</sup> angled directly at the Sun
at AM0, is 1360 W m<sup>-2</sup>. At AM1, this is about 1000 W
m<sup>-2</sup>. When recording solar cell performance, AM1.5 is
generally used. The filtering out of higher-energy wavelengths by the
atmosphere (primarily the ozone layer) is known as **attenuation**.

## Semiconductors

Semiconductors are extremely sensitive to temperature and the presence
of impurities. Their conductivity increases as temperature increases,
because the greater energy breaks bonds and frees electrons. These
free electrons leave behind a "space", known as a hole. If this hole
is then taken up by another electron, the charge within the material
has moved with it, meaning the holes effectively provide a mechanism
for the flow of charge.

Adding impurities allows the number of free electrons --- and thus
holes --- to be manipulated. These impurities are known as
**dopants**, the process of adding them being called
**doping**. Silicon has four outer electrons. If an impurity has five,
the fifth will be unable to form a bond and will be free. If an
impurity has only three outer electrons it will be unable to form a
fourth bond and leave a hole. Phosphorus and boron respectively are
commonly used in these ways. Phosphorus is an **n-type dopant** and
material doped with it is an n-type material. This means it has an
increased number of free electrons. Boron is a **p-type dopant** and
material doped with it is a p-type material. This means it has an
increased number of holes.

Another key characteristic of semiconductors is their
photosensitivity. When a voltage is applied, current flowing will
increase as light levels increase. This is termed
**photoconductivity**. For a photon to interact with a semiconductor,
releasing electrons, its energy must exceed a given **threshold
energy**. These differ between materials.

Without intervention, electron-hole production and recombination will
remain in a steady state. Preventing this recombination is essential
to divert electrons into an external circuit and thus generate
power. If we dope a slice of silicon alternately so it has an n-type
top layer and a p-type lower layer, the region where they meet forms a
**p-n junction**. In this region electrons from the the upper half
will fill holes in the bottom half, thus forming a positive charge in
the n-type material and a negative charge in the p-type material. A
"depletion region" then forms between them due to their opposite
charges. If the p-n junction is exposed to light, photons with
sufficient energy are absorbed and produce electron-hole pairs. If
these form within the depletion region, a potential difference is
created as the electron is attracted upward and the hole pulls an
electron from the lower region. If connected to a circuit, this causes
a current to flow.

The maximum voltage a PV cell can achieve is governed by the material
from which it is made; it is numerically equivalent, in volts, to the
threshold energy, in eV.

PV cells are formed into a _module_ and a number of modules are formed
into a _solar array_. A "power-conditioning interface then converts
from d.c. to a.c. if necessary and connected to a distribution network
or the grid if the power is to be used externally. If not connected to
the grid it is likely power will need to be stored in batteries. These
batteries must be able to withstand repeated charging and discharging,
slowly over long periods of time. Batteries are ideal for ironing out
short-term unreliability of supply but are less well-suited to the
cyclical nature of availability as seasons change.

Cells and the connectors between them are sandwiched between glass and
a polymer film in a process called **encapsulation**. This is
essential to protect the module.