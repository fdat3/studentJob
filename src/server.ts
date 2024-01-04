import App from '@/app';
import { AuthRoute, ImageRoute, IndexRoute, UserRoute, JobRoute, ProposalRoute } from '@/routes';
import { validateEnv } from '@/utils';
import { TeamRoute } from '@routes/v1/team.route.ts';

new validateEnv();
const app = new App([new IndexRoute(), new UserRoute(), new AuthRoute(), new ImageRoute(), new JobRoute(), new ProposalRoute(), new TeamRoute()]);
app.listen();
