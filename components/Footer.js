const links = ["about", "careers", "press", "blog", "affiliates"];

const content = ["company", "community", "teaching", "support"];

import { } from '@heroicons/react/solid'

export default function Footer() {
  return (
    <footer className="flex flex-col bottom-0 bg-gray-900 px-20 py-10">
      <section className="flex justify-between space-x-10 pb-10 border-b-2 border-gray-700">
          {
              content.map((x, index) => (
                <div key={index} className="flex flex-col">
                <h1 className="text-white text-xl font-medium capitalize">{x}</h1>
                <ul>
                    {
                        links.map((x, index) => <li key={index} className="capitalize text-gray-500">{x}</li>)
                    }
                </ul>
              </div>
              ))
          }
      </section>
          <div className="flex bottom-0 justify-between">
              <p className="capitalize text-gray-500">2015-2020 skilify education private limited. all rights reserved</p>
              <div className="flex">

              </div>
          </div>
    </footer>
  );
}

