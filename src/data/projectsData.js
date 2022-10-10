import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import mr_buggy from '../assets/pdf/MrBuggy_v1.pdf'
import api_bug_report from '../assets/pdf/API_Bug_Report.pdf'
import exploration_tests from '../assets/pdf/Explorataion_tests.pdf'
import test_scenario from '../assets/pdf/Test_scenario.pdf'
import usability_bug_report from '../assets/pdf/Usability_Bug_Report.pdf'



export const projectsData = [
    {
        id: 1,
        projectName: 'MrBuggy',
        projectDesc: 'This project includes my tests application MrBuggy v1 with described steps I did and attached reports',
        tags: ['Test plan', 'Tests cases', 'Bug report', 'Test report'],
        code: mr_buggy,
        demo: mr_buggy,
        image: one
    },
    {
        id: 2,
        projectName: 'Test API',
        projectDesc: 'This project includes api tests I executed with attached bug report',
        tags: ['Bug report'],
        code: api_bug_report,
        demo: api_bug_report,
        image: two
    },
    {
        id: 3,
        projectName: 'Exploration tests',
        projectDesc: 'This project includes my exploration tests I did to verify quantity application MrBuggy7',
        tags: ['Test plan, Test report'],
        code: exploration_tests,
        demo: exploration_tests,
        image: three
    },
    {
        id: 4,
        projectName: 'Test scenario',
        projectDesc: 'This project includes test scenario I prepared for rossmann.pl',
        tags: ['Test scenario'],
        code: test_scenario,
        demo: test_scenario,
        image: four
    },
    {
        id: 5,
        projectName: 'Usability Bug Report',
        projectDesc: 'This project includes usability bug report I did for E-quinox website',
        tags: ['Usability Bug Report'],
        code: usability_bug_report,
        demo: usability_bug_report,
        image: five
    },
   /* {
        id: 6,
        projectName: 'Uber Lite',
        projectDesc: 'Uber clone',
        tags: ['Flutter'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: six
    },
    {
        id: 7,
        projectName: 'Stock Market App',
        projectDesc: 'A simple stock market API app',
        tags: ['React', 'Redux', 'Bootstrap'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: seven
    },
    {
        id: 8,
        projectName: 'Car Pooling System',
        projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
        tags: ['Flutter', 'React'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: eight
    },*/
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/