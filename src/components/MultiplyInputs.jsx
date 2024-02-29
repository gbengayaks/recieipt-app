import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

function MultiplyInputs() {
  const { control, register } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "inputs",
  });

  const calculateProduct = (index) => {
    const input1 = fields[index]?.input1 || 0;
    const input2 = fields[index]?.input2 || 0;
    return input1 * input2;
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            type="number"
            {...register(`inputs.${index}.input1`)}
            defaultValue={field.input1}
          />
          <input
            type="number"
            {...register(`inputs.${index}.input2`)}
            defaultValue={field.input2}
          />
          <input
            type="number"
            value={calculateProduct(index)}
            readOnly
          />
        </div>
      ))}
      <button type="button" onClick={() => append({})}>
        Add Input
      </button>
    </div>
  );
}

export default MultiplyInputs;
