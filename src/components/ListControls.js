import React from 'react';
import RadioGroup from './RadioGroup';
import './ListControls.css';

const ListControls = ({
  query,
  orderBy,
  direction,
  onOrderByChanged,
  onDirectionChanged,
  onQueryChanged,
}) => {
  return (
    <div className="list-controls">
      <div>
        <input
          type="text"
          onChange={event => onQueryChanged(event.target.value)}
          value={query}
          placeholder="Search by name"
        />
        <div className="radios">
          <RadioGroup
            title="Order by"
            value={orderBy}
            options={[
              { name: 'First name', value: 'firstName' },
              { name: 'Last name', value: 'lastName' },
            ]}
            onChange={onOrderByChanged}
          />
          <RadioGroup
            title="Direction"
            value={direction}
            options={[
              { name: 'Ascending', value: 'asc' },
              { name: 'Descending', value: 'desc' },
            ]}
            onChange={onDirectionChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default ListControls;
