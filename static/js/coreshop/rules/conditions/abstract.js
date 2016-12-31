/**
 * CoreShop
 *
 * LICENSE
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2015-2016 Dominik Pfaffenbauer (https://www.pfaffenbauer.at)
 * @license    https://www.coreshop.org/license     GNU General Public License version 3 (GPLv3)
 */

pimcore.registerNS('pimcore.plugin.coreshop.rules.conditions');
pimcore.registerNS('pimcore.plugin.coreshop.rules.conditions.abstract');

pimcore.plugin.coreshop.rules.conditions.abstract = Class.create(pimcore.plugin.coreshop.rules.abstract, {
    elementType : 'condition',

    getForm : function () {

        this.form = Ext.create('Ext.form.FieldContainer', {
            items : [
                {
                    xtype:'displayfield',
                    value:t('coreshop_condition_no_configuration'),
                    cls: 'description',
                    anchor:'100%',
                    width:'100%',
                    style: 'font-style:italic;background:#f5f5f5;padding:5px;'
                }
            ]
        });

        return this.form;
    }
});
