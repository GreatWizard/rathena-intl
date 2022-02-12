## rAthena Intl

[![Github Action](https://github.com/GreatWizard/lan-play-status/actions/workflows/test.yml/badge.svg)](https://github.com/GreatWizard/lan-play-status/actions/workflows/test.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Liberapay](https://img.shields.io/liberapay/patrons/GreatWizard.svg?logo=liberapay)](https://liberapay.com/GreatWizard/)

This project intends to translate [rAthena NPC](https://github.com/rathena/rathena/tree/master/npc) texts in many languages.

## NPC

Translations are extract from rAthena NPC scripts.
They are automatically parsed and stored into a file following the [XLIFF v1.2](https://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html) format.

### Commands with text

```
*announce "<text>",<flag>{,<fontColor>{,<fontType>{,<fontSize>{,<fontAlign>{,<fontY>{,<char_id>}}}}}};

*mapannounce "<map name>","<text>",<flag>{,<fontColor>{,<fontType>{,<fontSize>{,<fontAlign>{,<fontY>}}}}}};

*areaannounce "<map name>",<x1>,<y1>,<x2>,<y2>,"<text>",<flag>{,<fontColor>{,<fontType>{,<fontSize>{,<fontAlign>{,<fontY>}}}}}};

*unittalk <GID>,"<text>"{,flag};

*instance_announce <instance id>,"<text>",<flag>{,<fontColor>{,<fontType>{,<fontSize>{,<fontAlign>{,<fontY>}}}}};

*mes "<string>"{,"<string>"{,...}};

*menu "<option_text>",<target_label>{,"<option_text>",<target_label>,...};
```
