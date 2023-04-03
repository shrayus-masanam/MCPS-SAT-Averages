# MCPS SAT Averages
Shrayus Masanam, April 3, 2023<br>
An analysis of the average SAT scores of all MCPS high schools from 2017 to 2022 (the New SAT).
## The Question
Montgomery County Public Schools, like almost every other school district in the U.S., switched to a virtual learning system following the global outbreak of COVID-19. This began at the end of the 2020-2021 school year and lasted until the end of the 2020-2021 school year. During this period of lockdown, I witnessed firsthand accounts of students and teachers expressing dissatisfaction towards the way that classes were being taught and questioning the effectiveness of condensing and abridging classes to fit into an abnormal schedule. Three years later, I still wonder about these things and I have summarized them into one overarching question: **was virtual learning an adaquete substitue to traditional, in-person schooling?**

## The Procedure
I decided that a good way to measure academic performance would be to look at data regarding standardized exam scores. MCPS's Office of Shared Accountability annually releases public documents dubbed [*Schools at a Glance*](https://ww2.montgomeryschoolsmd.org/departments/sharedaccountability/glance/) which contain a lot of information about every school in the district. Included in this information are average SAT scores, which measure an exam-taker's Evidence-Based Reading and Writing (EVBRW) and Math skills on a scale from 200-800 each, totaling for a composite score on a scale from 400-1600.

Using a library called `pdf.js-extract` (based off of Mozilla's `pdf.js`), I wrote a program to sift through the pages of the *At a Glance* documents to find the average composite, EVBRW, and math scores for every high school in MCPS (excluding Thomas Edision). Since every high school listing in the document is symmetrical, I just needed the approximate coordinates of where the scores would be in order to extract the text from all high school pages in the PDF. I did this by specifying an x-position, y-position, and a margin of error for both (`x`, `y`, `xMoE` and `yMoE`). Shown below is an excerpt from `config.json` used to get the composite scores from 2021-202:
```js
"compositeCoords": {
    "x": 490.5, // the approx. x-position of the text
    "y": 161.5, // the approx. y-position of the text
    "xMoE": 1.5, // give or take 1.5 pixels from the x-position
    "yMoE": 1.5 // give or take 1.5 pixels from the y-position
},
```
This was done for all *At a Glance* documents from 2017-2018 to 2021-2022, the years in which MCPS has reported scores from administrations of [the New SAT](https://newsroom.collegeboard.org/one-year-first-administration-march-2016-students-say-new-sat-makes-it-easier-show-their-best-work) (400-1600 point scale). The documents have not been included in this repository, but my own config file has.

## The Results

<details>
<summary>Composite Scores</summary>

| School               | 2018 | 2019 | 2020 | 2021 | 2022 |
|----------------------|------|------|------|------|------|
| Bethesda-Chevy Chase | 1249 | 1249 | 1200 | 1203 | 1281 |
| Montgomery Blair     | 1142 | 1216 | 1202 | 1221 | 1314 |
| James Hubert Blake   | 1036 | 1086 | 1052 | 1024 | 1111 |
| Winston Churchill    | 1252 | 1341 | 1291 | 1298 | 1329 |
| Clarksburg           | 1089 | 1112 | 1077 | 1045 | 1162 |
| Damascus             | 1138 | 1148 | 1132 | 1101 | 1153 |
| Albert Einstein      | 1039 | 1076 | 1020 | 1003 | 1128 |
| Gaithersburg         | 1043 | 1063 |  980 |  931 | 1074 |
| Walter Johnson       | 1213 | 1239 | 1234 | 1224 | 1246 |
| John F. Kennedy      |  961 |  985 |  897 |  894 | 1014 |
| Col. Zadok Magruder  | 1093 | 1127 | 1067 | 1049 | 1144 |
| Richard Montgomery   | 1201 | 1237 | 1255 | 1228 | 1297 |
| Northwest            | 1145 | 1138 | 1091 | 1092 | 1213 |
| Northwood            | 1014 | 1024 |  973 |  958 | 1087 |
| Paint Branch         | 1064 | 1062 | 1024 | 1012 | 1079 |
| Poolesville          | 1296 | 1354 | 1330 | 1309 | 1391 |
| Quince Orchard       | 1134 | 1166 | 1120 | 1123 | 1178 |
| Rockville            | 1107 | 1110 | 1106 | 1033 | 1144 |
| Seneca Valley        | 1048 | 1053 |  981 |  950 | 1051 |
| Sherwood             | 1150 | 1183 | 1128 | 1104 | 1171 |
| Springbrook          | 1043 | 1070 | 1027 |  966 | 1123 |
| Watkins Mill         | 1119 | 1050 |  917 |  902 | 1052 |
| Wheaton              | 1002 | 1125 | 1084 | 1029 | 1151 |
| Walt Whitman         | 1289 | 1330 | 1339 | 1297 | 1350 |
| Thomas S. Wootton    | 1230 | 1322 | 1315 | 1281 | 1325 |

</details>
<a href="https://user-images.githubusercontent.com/45981228/229511205-85bbef89-d8c8-4a27-a1fc-5aedc83209ab.svg"><img width="300" src="https://user-images.githubusercontent.com/45981228/229511205-85bbef89-d8c8-4a27-a1fc-5aedc83209ab.svg"></a>
<br><br>
<details>
<summary>EVBRW Scores</summary>

| School               | 2018 | 2019 | 2020 | 2021 | 2022 |
|----------------------|------|------|------|------|------|
| Bethesda-Chevy Chase |  634 |  628 |  606 |  608 |  642 |
| Montgomery Blair     |  573 |  611 |  605 |  614 |  659 |
| James Hubert Blake   |  535 |  556 |  541 |  530 |  570 |
| Winston Churchill    |  624 |  660 |  638 |  641 |  653 |
| Clarksburg           |  548 |  560 |  546 |  530 |  583 |
| Damascus             |  574 |  576 |  567 |  557 |  578 |
| Albert Einstein      |  533 |  550 |  527 |  519 |  587 |
| Gaithersburg         |  532 |  539 |  502 |  479 |  547 |
| Walter Johnson       |  608 |  620 |  621 |  612 |  625 |
| John F. Kennedy      |  488 |  501 |  456 |  455 |  513 |
| Col. Zadok Magruder  |  550 |  564 |  536 |  532 |  575 |
| Richard Montgomery   |  602 |  615 |  625 |  617 |  645 |
| Northwest            |  571 |  568 |  548 |  548 |  603 |
| Northwood            |  520 |  525 |  500 |  499 |  563 |
| Paint Branch         |  537 |  535 |  517 |  514 |  542 |
| Poolesville          |  647 |  669 |  659 |  655 |  692 |
| Quince Orchard       |  567 |  586 |  561 |  563 |  591 |
| Rockville            |  557 |  562 |  561 |  527 |  581 |
| Seneca Valley        |  529 |  537 |  498 |  485 |  526 |
| Sherwood             |  583 |  595 |  569 |  560 |  591 |
| Springbrook          |  527 |  541 |  518 |  492 |  560 |
| Watkins Mill         |  562 |  534 |  467 |  465 |  540 |
| Wheaton              |  500 |  557 |  543 |  518 |  579 |
| Walt Whitman         |  639 |  659 |  661 |  644 |  669 |
| Thomas S. Wootton    |  610 |  647 |  644 |  631 |  649 |

</details>
<a href="https://user-images.githubusercontent.com/45981228/229510523-fc295968-a265-4673-b0c7-66ef78837d7d.svg"><img width="300" src="https://user-images.githubusercontent.com/45981228/229510523-fc295968-a265-4673-b0c7-66ef78837d7d.svg"></a>
<br><br>
<details>
<summary>Math Scores</summary>

| School               | 2018 | 2019 | 2020 | 2021 | 2022 |
|----------------------|------|------|------|------|------|
| Bethesda-Chevy Chase |  616 |  622 |  594 |  595 |  639 |
| Montgomery Blair     |  569 |  605 |  596 |  607 |  655 |
| James Hubert Blake   |  501 |  530 |  511 |  494 |  540 |
| Winston Churchill    |  628 |  681 |  653 |  656 |  676 |
| Clarksburg           |  541 |  552 |  531 |  515 |  580 |
| Damascus             |  564 |  573 |  565 |  544 |  575 |
| Albert Einstein      |  506 |  526 |  494 |  483 |  541 |
| Gaithersburg         |  512 |  524 |  478 |  452 |  526 |
| Walter Johnson       |  605 |  619 |  613 |  611 |  622 |
| John F. Kennedy      |  473 |  485 |  441 |  439 |  501 |
| Col. Zadok Magruder  |  543 |  563 |  530 |  518 |  569 |
| Richard Montgomery   |  599 |  622 |  630 |  611 |  652 |
| Northwest            |  573 |  570 |  544 |  544 |  610 |
| Northwood            |  494 |  499 |  473 |  459 |  524 |
| Paint Branch         |  527 |  526 |  507 |  498 |  538 |
| Poolesville          |  649 |  685 |  671 |  654 |  700 |
| Quince Orchard       |  567 |  580 |  559 |  559 |  587 |
| Rockville            |  550 |  548 |  545 |  505 |  564 |
| Seneca Valley        |  519 |  516 |  484 |  465 |  525 |
| Sherwood             |  568 |  588 |  559 |  544 |  580 |
| Springbrook          |  516 |  530 |  509 |  474 |  563 |
| Watkins Mill         |  557 |  515 |  450 |  437 |  512 |
| Wheaton              |  502 |  568 |  541 |  511 |  573 |
| Walt Whitman         |  650 |  671 |  678 |  654 |  682 |
| Thomas S. Wootton    |  619 |  674 |  671 |  650 |  676 |

</details>
<a href="https://user-images.githubusercontent.com/45981228/229511325-0b22b6c0-0e09-4278-89ca-ce9585d37de6.svg"><img width="300" src="https://user-images.githubusercontent.com/45981228/229511325-0b22b6c0-0e09-4278-89ca-ce9585d37de6.svg"></a>
<br><br>
* Years denote the year that the school year ended (e.g. 2021-2022 would be listed as 2022).

## Conclusions
While using a singular dataset obviously isn't enough information to make a broad assertion, I think these findings strongly correlate to what many of us have already been suspecting. During virtual learning, many schools reported a decline in SAT scores from the previous year, and **every** school reported an increase in scores the year after in-person learning resumed.

<br><br><a href="https://user-images.githubusercontent.com/45981228/229513229-1b9810b1-89fe-47ed-9839-8ae79af4074a.svg"><img align="center" width="500" src="https://user-images.githubusercontent.com/45981228/229513229-1b9810b1-89fe-47ed-9839-8ae79af4074a.svg"></a><br><em align="center">All high schools (anonymously)</em><br><br>

 To answer my original question, I don't believe that virtual learning was an adaquete substitute to in-person learning. However, it could have been a lot worse; in my opinion, MCPS made the right call to switch back to in-person learning after just one year of virtual learning. The immediate rebound of the rate of scores per year proves that no irrevocable damage was done. Although the data here is limited, an inference that could be made based on this hypothesis is that scores will continue to increase beyond or stagnate around the values of the 2021-2022 school year, but only time will tell for sure.

 All source code used to arrive at these findings has been provided in this repository. Formatted data and charts can be found in <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpLixVcCFD8GmWAjFY5C5BZFseND5ywUNTh0fHVOXy6YvlZ1x9FuOqW5aZHH5ZT3HvVxnbtg_Q-rKd/pubhtml">this spreadsheet</a>.
