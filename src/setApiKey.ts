import * as sendgrid from '@sendgrid/client';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
