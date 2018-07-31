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

export let mediumFormDefinitionConfig = [
  { id: 1, label: 'Email', key: 'short_email_1', value: '', type: 'email', pattern: emailPattern},
  { id: 2, label: 'Short_1', key: 'short_text_1', value: '', type: 'textbox', pattern: maxLengthPattern },
  { id: 3, label: 'Short_2', key: 'short_text_2', value: '', type: 'textbox', pattern: maxLengthPattern },
  { id: 4, label: 'Short_3', key: 'short_text_3', value: '', type: 'textbox', pattern: maxLengthPattern, required: true },
    dropdown_1,
  { id: 6, label: 'Extra_1', key: 'extra_1', value: '', type: 'textbox', pattern: maxLengthPattern },
  { id: 7, label: 'Extra_2', key: 'extra_2', value: '', type: 'textbox', pattern: maxLengthPattern},
  { id: 8, label: 'Extra_3', key: 'extra_3', value: '', type: 'textbox', pattern: maxLengthPattern},
];
