import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_63my3xq';
const TEMPLATE_ID = 'template_dx8wg88';
const PUBLIC_KEY = 'qko6zRF0TXzmgmBlU';

// Need to mock fetch or use rest api directly
// Wait, @emailjs/browser requires XMLHttpRequest or fetch if it's in browser. In node, it might fail!
console.log('Testing in node might fail for @emailjs/browser');
