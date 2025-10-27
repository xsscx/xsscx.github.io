# iccDEV

## Introduction

The purpose of the International Color Consortium (ICC) is to promote
the use and adoption of open, vendor-neutral, cross-platform color management systems.
The International Color Consortium encourages vendors to support the ICC profile
format and the workflows required to use ICC profiles.

## Quick Start

### Web Browser

```
npm install iccdev
cd node_modules/iccdev
npx http-server .
Browse URL http://localhost:8080
```

### Command Line

```
npm install iccdev
cd node_modules/iccdev
node run-iccScan.js
```

### Expected Output

```
node .\run-iccScan.js

iccScan 0.2 [LittleCMS 2.17, IccProfLib 2.3.1, IccLibXML 2.3.1]
Copyright (c) 2022-2025 David H Hoyt LLC - iccScan Source Code & IccSignatureUtilities.h
Copyright (c) 1998-2015 Marti Maria Saguer - Little CMS2 Library
Copyright (c) 2003-2025 International Color Consortium - iccMAX Library
...
[2025-10-26 19:04:39] [DEBUG] Starting ICC header fuzz diagnostics...
ICC_INFO: [licc.cpp:1460] [TRACE] Field 'cmmId': offset=4 size=4
  [00] = 0x73
  [01] = 0x6d
  [02] = 0x63
  [03] = 0x6c
ICC_INFO: [licc.cpp:1467] [TRACE] Field 'magic': offset=36 size=4
  [00] = 0x70
  [01] = 0x73
  [02] = 0x63
  [03] = 0x61
ICC_WARN: [licc.cpp:1472] Potential Input Pollution: Profile Magic mismatch
[2025-10-26 19:04:39] [HEURISTIC] Phase='HeaderMagic' Detail='Invalid magic bytes (expected "acsp")'
ICC_WARN: [licc.cpp:1497] Potential Dirty Write: field=HeaderPad offset=0 val=0x73 (expected=0xee)
ICC_WARN: [licc.cpp:1497] Potential Dirty Write: field=HeaderPad offset=1 val=0x6d (expected=0xee)
...
        *** WARNING: Profile may contain matching heuristics

[2025-10-26 19:04:39] [WARN] Heuristic match indicator flagged
[2025-10-26 19:04:39] Validation Result: Ok

ICC_INFO: [licc.cpp:2338] Validation passed.
ICC_INFO: [licc.cpp:2358] Execution complete with exitCode=0
```

The iccDEV project (formerly known as DemoIccMAX) provides an
open source set of libraries and tools that allow for the interaction, manipulation,
and application of ICC based color management profiles based on the 
[ICC profile specification](http://www.color.org/icc_specs2.xalter) and the 
[iccMAX profile specification](http://www.color.org/iccmax.xalter).

All documentation is in the "docs" directory. If you're just getting started, 
we recommend you read the Introduction for a list of features and 
libraries included in iccDEV.

To build from source view the [Build documentation](docs/build.md).

## Contributing

This software consists of voluntary contributions made by many individuals
on behalf of the The International Color Consortium.

The first thing to do, before anything else, is talk to us! Whether you're
reporting an issue, requesting or implementing a feature, or just asking a
question; please don’t hesitate to reach out to project maintainers or the
community as a whole. This is an important first step because your issue,
feature, or the question may have been solved or discussed already, and you’ll
save yourself a lot of time by asking first.

## License

iccDEV is licensed under the BSD 3-Clause “New” or “Revised” License

Membership in the ICC is encouraged when this software is used for commercial purposes.
For more information on The International Color Consortium,
please visit [www.color.org](http://www.color.org).
