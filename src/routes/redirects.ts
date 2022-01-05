import {Router} from 'express';

const router = Router();

const defaultRedirecturl = '/';

const redirectMap: Record<string, string> = {
    'digital-cma': 'https://www.compass.com/listing-presentation/view/cma/cma-da2d4f28-4c18-4797-9ffe-2a8368c4aa38/v/version-1640979219',
};

router.get('/:key', async (req, res) => {
    const {key} = req.params;
    const redirectUrl = key in redirectMap ? redirectMap[key] : defaultRedirecturl;
    res.redirect(301, redirectUrl);
});

export default router;
