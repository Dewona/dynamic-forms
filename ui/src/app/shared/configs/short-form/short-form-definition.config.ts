const dropdown_1 = {
  id: 5, label: 'Expense Type', key: 'short_dropdown_1', value: 1, type: 'dropdown', required: true,
      options: [
          { key: 1, value: 'option_1' },
          { key: 2, value: 'option_2' },
          { key: 3, value: 'option_3' },
          { key: 4, value: 'option_4' },
          { key: 5, value: 'option_5' }
      ]
};

const emailPattern = '.+@.+';
const maxLengthPattern = '.{0,70}';

export let shortFormDefinitionConfig = [
  { id: 1, label: 'Email', key: 'short_email_1', value: '', type: 'email', pattern: emailPattern},
  { id: 2, label: 'Short Form Text 1', key: 'short_text_1', value: '', type: 'textbox', pattern: maxLengthPattern },
  { id: 3, label: 'Short Form Text 2', key: 'short_text_2', value: '', type: 'textbox', pattern: maxLengthPattern },
  { id: 4, label: 'Short Form Text 3', key: 'short_text_3', value: '', type: 'textbox', pattern: maxLengthPattern, required: true },
    dropdown_1
];
