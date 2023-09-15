
import client from '@mailchimp/mailchimp_marketing'
client.setConfig({
    apiKey: `${process.env.MAILCHIMP_API_KEY}`,
    server: `${process.env.MAILCHIMP_PREFIX}`,
});
export async function addToMailChimp({ email, name }: { email: string, name: string }) {
   let  res = await client.lists.addListMember(`${process.env.MAILCHIMP_LIST_ID}`, { email_address: email, email_type: 'text', status: 'subscribed' })
}