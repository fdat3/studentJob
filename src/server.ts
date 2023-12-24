import App from '@/app';
import { AuthRoute, ImageRoute, IndexRoute, UserRoute, JobRoute } from '@/routes';
import { validateEnv } from '@/utils';

new validateEnv();
const app = new App([new IndexRoute(), new UserRoute(), new AuthRoute(), new ImageRoute(), new JobRoute()]);
app.listen();
