import App from '@/app';
import { AuthRoute, ImageRoute, IndexRoute, UsersRoute } from '@/routes';
import { validateEnv } from '@/utils';

new validateEnv();
const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new ImageRoute()]);
app.listen();
