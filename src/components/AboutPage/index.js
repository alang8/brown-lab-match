import { Link, Typography } from "@material-ui/core";

const AboutPage = () => {
  return <>
    <Typography variant='h4' component='h1' gutterBottom>
      About Brown Lab Match
    </Typography>
    <Typography variant='body1' gutterBottom>
      Joining a research group as an undergraduate can be an intimidating and overwhelming experience. Brown Lab Match was conceived by the Brown Research Club (BRC) with the goal of making this process more accessible and less daunting by providing an easily navigable starting point. This repository of labs, mentors, and student feedback was assembled in hopes of lowering barriers to stimulating research experiences at Brown through the centralization of information that survey respondents wished they had when choosing a research group or mentor.
    </Typography>
    <Typography variant='body1' gutterBottom>
      The <Link href='https://brownresearchclub.weebly.com/' rel='noopener noreferrer' target='_blank'>Brown Research Club</Link> was founded in 2018 and aims to build and empower a unified community of undergraduate researchers on campus, enabling them to thrive in inquiry-driven academic pursuits at Brown and beyond. With questions or suggestions regarding Brown Lab Match, email us at <Link href={`mailto:researchclub@brown.edu`} rel='noopener noreferrer' target='_blank'>researchclub@brown.edu</Link>.
    </Typography>
    <Typography variant='h4' component='h2' gutterBottom>
      Disclaimer
    </Typography>
    <Typography variant='body1'>
      All reviews included in Brown Lab Match are based on the self-reported, subjective experiences of individual undergraduates. Therefore, the opinions and assessments expressed therein do not reflect the personal views of the Brown Research Club or its executive board — they are presented with this qualification to inform and supplement the decisions of undergraduates seeking research positions. Because this is the first iteration of the site, users should also keep in mind that the summaries are based on a volume of survey responses that will progressively increase.
    </Typography>
  </>;
}

export default AboutPage;